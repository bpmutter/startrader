import React, { useState, useContext, useEffect } from "react";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Heading } from "arwes";
import SelectOption from "./Select";
import Radio from "./Radio";
import LabelText from "./LabelText";
import Textarea from "./Textarea";
import {FaTimesCircle} from 'react-icons/fa'

const EditProfile = ({closeModal, renderProfile}) => {
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
  const [bio, setBio] = useState("");
  const [faction, setFaction] = useState("rebellion");
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [userImage, setUserImage] = useState("")

  const [errors, setErrors] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const { id, logout, token } = useContext(appContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`);
      const {user} = await res.json();
      setName(user.name);
      setEmail(user.email);
      setSpecies(user.species);
      setBio(user.bio);
      setFaction( user.faction ? "rebellion" : "empire");
      setUserImage(user.user_image);

      const res2 = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/species`);
      const { species } = await res2.json();
      setSpeciesOptions(species);
    })();
  }, [id]);

  const setFormValues = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "species") setSpecies(e.target.value);
    else if (e.target.name === "bio") setBio(e.target.value);
    else if (e.target.name === "faction") {
      if (e.target.value === "rebellion") setFaction("rebellion");
      else setFaction("empire");
    }
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if((password || confirmPassword) && (password !== confirmPassword)){
      setErrors("Please make sure that you have entered the new password correctly.")
    }
    console.table(
      email,
      name,
      species,
      bio,
      faction
    );
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ 
        email, name, species, bio, faction: faction === "rebellion", user_image: userImage
      })
    });
    const data = res.json();
    if(data.error){
      setErrors(data.error);
    } else{
      closeModal();
      renderProfile();
    }

  };
  const deleteAccount = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await res.json();
      if(data.error){
        setErrors(data.error);
      }else {
        logout();
        setLoggedIn(false);
      }
      
  }
  return (
    <div style={style.contentWrapper}>
      <Button onClick={closeModal}>
        <FaTimesCircle />
      </Button>
      <Heading node="h2" style={style.title}>
        Edit Profile
      </Heading>
      <div style={{ padding: ".75rem .75rem 1.5rem", textAlign: "center" }}>
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
            value={email}
          />
          <Input
            label="Name: "
            type="text"
            name="name"
            onChange={setFormValues}
            required
            value={name}
          />
          <SelectOption
            label="Species: "
            name="species"
            onChange={setFormValues}
            options={speciesOptions}
            optionValueId={"id"}
            optionInnerContent={"species_type"}
            required
            selected={species}
          />
          <p style={{ padding: ".5rem 0" }}>
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
            value={bio}
          />
          <Input
            label="New Password: "
            type="password"
            name="password"
            onChange={setFormValues}
          />
          <Input
            label="Confirm New Password: "
            type="password"
            name="confirmPassword"
            onChange={setFormValues}
            required
          />
          <p
            style={{
              marginTop: "2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={submitForm}>Update Profile</Button>
            <Button layer="alert" onClick={deleteAccount}>
              Delete Account
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
