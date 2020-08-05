import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Content, Heading } from "arwes";
import Frame from "arwes/lib/Frame";
import SelectOption from "./Select";
import Radio from './Radio';
import LabelText from './LabelText';
import Textarea from './Textarea';
import Puffs from './Puffs'

const SignUp = () => {
  const style = {
    container: {
      padding: "2rem",
      maxWidth: 600,
      margin: "0 auto",
    },
    title: {
      textAlign: "center",
      margin: "1rem",
    },
    contentWrapper: {
      margin: "1rem",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState(1);
  const [bio, setBio] = useState('');
  const [faction, setFaction] = useState('rebellion');
  const [speciesOptions, setSpeciesOptions] = useState([]);
  
  const [errors, setErrors] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { login } = useContext(appContext);

  useEffect(()=>{
      ( async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/species`);
        const {species} = await res.json();
        setSpeciesOptions(species);
      })();
  }, [])

  const setFormValues = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else if (e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
    else if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "species") setSpecies(e.target.value);
    else if (e.target.name === "bio") setBio(e.target.value);
    else if (e.target.name === "faction") {
      if(e.target.value === "rebellion") setFaction('rebellion');
      else setFaction('empire');
    }

  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.table(
        email, password, confirmPassword, name, species, bio, faction
    )
    if(password !== confirmPassword){ 
        setErrors('It looks like you entered 2 different passwords. Please reenter your password the same in both fields and try again.');
        setPassword('');
        setConfirmPassword('');
        document.getElementsByName('password')[0].value = '';
        document.getElementsByName('confirmPassword')[0].value = '';
    }
    
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            name,
            species,
            bio,
            faction: faction === "rebellion",
            user_image: `https://starwars-trader-imgs.s3.us-east-2.amazonaws.com/img/species/${species}.jpg`,
          }),
        }
      );
      const data = await res.json();

      if (data.error) {
        setErrors(data.error);
        return;
      }
      login(data.access_token, data.user);
      setLoggedIn(true);
    } catch (err) {
      alert(
        "Oh no, it looks like there was some force interference causing problems with our server. Please try again later."
      );
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Content style={style.container}>
            <Frame animate level={3} corners={4} style={style.frame}>
              <div style={style.contentWrapper}>
                <Heading node="h2" style={style.title}>
                  Sign Up
                </Heading>
                <div
                  style={{
                    padding: ".75rem .75rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <Words animate layer="alert">
                    {errors ? errors : " "}
                  </Words>
                </div>
                <div>
                  <form onSubmit={submitForm} style={style.loginForm}>
                    <Input
                      label="Email: "
                      type="email"
                      name="email"
                      onChange={setFormValues}
                      required
                    />
                    <Input
                      label="Name: "
                      type="text"
                      name="name"
                      onChange={setFormValues}
                      required
                    />

                    <Input
                      label="Password: "
                      type="password"
                      name="password"
                      onChange={setFormValues}
                      required
                    />
                    <Input
                      label="Confirm password: "
                      type="password"
                      name="confirmPassword"
                      onChange={setFormValues}
                      required
                    />
                    <SelectOption
                      label="Species: "
                      name="species"
                      onChange={setFormValues}
                      options={speciesOptions}
                      optionValueId={"id"}
                      optionInnerContent={"species_type"}
                      required
                    />
                    <p style={{ padding: ".5rem 0 .75rem", margin: 0 }}>
                      <LabelText label="Faction: " required />
                      <Radio
                        name="faction"
                        value="rebellion"
                        checked={faction === "rebellion"}
                        onChange={setFormValues}
                        label="Rebellion"
                      />
                      <Radio
                        name="faction"
                        value="empire"
                        checked={faction === "empire"}
                        onChange={setFormValues}
                        label="Empire"
                      />
                    </p>
                    <Textarea
                      label="Bio: "
                      type="textarea"
                      name="bio"
                      onChange={setFormValues}
                      required
                    />
                    <p style={{ textAlign: "center" }}>
                      <Button>Sign Up</Button>
                    </p>
                  </form>
                </div>
              </div>
            </Frame>
          </Content>
          <Puffs />
        </div>
      )}
    </div>
  );
};

export default SignUp;
