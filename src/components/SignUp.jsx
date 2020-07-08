import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Content, Heading } from "arwes";
import Frame from "arwes/lib/Frame";

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
  const [species, setSpecies] = useState('');
  const [bio, setBio] = useState('');
  const [faction, setFaction] = useState('rebellion');
  const [speciesOptions, setSpeciesOptions] = useState([]);
  
  const [errors, setErrors] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { login } = useContext(appContext);

  useEffect(()=>{
      ( async () => {
        const res = await fetch("http://localhost:5000/users/species");
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
    else if (e.target.name === "faction") setFaction(e.target.value);

  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("state of state::", 
        email, password, confirmPassword, name, species, bio, faction
    )
    // if(password !== confirmPassword){ 
    //     setErrors('It looks like you entered 2 different passwords. Please reenter your password the same in both fields and try again.');
    //     setPassword('');
    //     setConfirmPassword('');
    //     document.getElementsByName('password')[0].value = '';
    //     document.getElementsByName('confirmPassword')[0].value = '';
    // }
    // try {
    //   const res = await fetch("http://localhost:5000/users/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password, name, species, bio, faction }),
    //   });
    //   const data = await res.json();

    //   if (data.error) {
    //     setErrors(data.error);
    //     return;
    //   }
    //   login(data.access_token, data.user);
    //   setLoggedIn(true);
    // } catch (err) {
    //   alert(
    //     "Oh no, it looks like there was some force interference causing problems with our server. Please try again later."
    //   );
    // }
  };

  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Content style={style.container}>
          <Frame animate level={3} corners={4} style={style.frame}>
            <div style={style.contentWrapper}>
              <Heading node="h2" style={style.title}>
                Sign Up
              </Heading>
              <div
                style={{ padding: ".75rem .75rem 1.5rem", textAlign: "center" }}
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
                  />
                  <Input
                    label="Name: "
                    type="text"
                    name="name"
                    onChange={setFormValues}
                  />

                  <Input
                    label="Password: "
                    type="password"
                    name="password"
                    onChange={setFormValues}
                  />
                  <Input
                    label="Confirm password: "
                    type="password"
                    name="confirmPassword"
                    onChange={setFormValues}
                  />
                  <div>
                    <label>
                      <span>Species: </span>
                      <select name="species" onChange={setFormValues}>
                        {speciesOptions.map((singleSpecies) => {
                          return (
                            <option name="species" value={singleSpecies.id}>
                              {singleSpecies.species_type}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div>
                    <span>Faction: </span>
                    <span className="radio">
                      <label>
                        <input
                          name="faction"
                          type="radio"
                          value="rebellion"
                          checked={faction === "rebellion"}
                          onChange={setFormValues}
                        />
                        Rebellion
                      </label>
                    </span>
                    <span className="radio">
                      <label>
                        <input
                          type="radio"
                          name="faction"
                          value="empire"
                          checked={faction === "empire"}
                          onChange={setFormValues}
                        />
                        Empire
                      </label>
                    </span>
                  </div>
                  <Input
                    label="Bio: "
                    type="textarea"
                    name="bio"
                    onChange={setFormValues}
                  />
                  <p style={{ textAlign: "center" }}>
                    <Button>Sign Up</Button>
                  </p>
                </form>
              </div>
            </div>
          </Frame>
        </Content>
      )}
    </div>
  );
};

export default SignUp;
