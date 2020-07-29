import React, { useState, useContext, useEffect } from "react";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Heading, Line } from "arwes";
import SelectOption from "./Select";
import Radio from "./Radio";
import LabelText from "./LabelText";
import Textarea from "./Textarea";
import {FaTimesCircle} from 'react-icons/fa'

const EditProfile = ({closeModal, renderProfile}) => {
  const style = {
    container: {
      // padding: "2rem",
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
    formWrapper: {
      marginBottom: '1.5rem'
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center'
    }
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState(1);
  const [bio, setBio] = useState("");
  const [faction, setFaction] = useState("rebellion");
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [userImage, setUserImage] = useState("")
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  const { id, logout, token, login } = useContext(appContext);

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
    else if(e.target.name === "oldPassword") setOldPassword(e.target.value);
    else if(e.target.name === "newPassword") setNewPassword(e.target.value);
    else if(e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();

    const img = `https://starwars-trader-imgs.s3.us-east-2.amazonaws.com/img/species/${species}.jpg`;
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ 
        email, name, species, bio, faction: faction === "rebellion", user_image: img
      })
    });
    const data = await res.json();
    console.log('UPDATE DATA::', data)
    if(data.error){
      setErrors(data.error);
    } else{
      const {access_token, user} = data;
      closeModal();
      login(access_token, user)
      renderProfile();
    }

  };
  const changePassword = async (e) => {
    e.preventDefault();
    if ((newPassword || confirmPassword) && newPassword !== confirmPassword) {
      setErrors(
        "Please make sure that you have entered the new password correctly."
      );
    }
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/password/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          "old_password": oldPassword,
          "new_password": newPassword,
        }),
      }
    );
    const data = await res.json();
    if (data.error || !res.ok) {
      setErrors('There was a problem updating your password. Please make sure your old password is correct and try again.');
    } else {
      closeModal();
      renderProfile();
    }
  }

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
        closeModal();
        setLoggedIn(false);
      }
      
  }
  return (
    <>
      <div style={style.contentWrapper}>
        <Button onClick={closeModal}>
          <FaTimesCircle />
        </Button>
        <Heading node="h2" style={style.title}>
          Account
        </Heading>
        <div style={{ padding: ".5rem .75rem .5rem", textAlign: "center" }}>
          <Words animate layer="alert">
            {errors ? errors : " "}
          </Words>
        </div>
        <div style={style.formWrapper}>
          <form onSubmit={submitForm} style={style.loginForm}>
            <Heading node="h3">Change Profile</Heading>
            <Line animate />
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

            <div style={style.buttonWrapper}>
              <Button onClick={submitForm}>Update Profile</Button>
            </div>
          </form>
        </div>
        <div style={style.formWrapper}>
          <form onSubmit={changePassword} style={style.loginForm}>
            <Heading node="h3">Change Password</Heading>
            <Line animate />
            <Input
              label="Old Password: "
              type="password"
              name="oldPassword"
              onChange={setFormValues}
            />
            <Input
              label="New Password: "
              type="password"
              name="newPassword"
              onChange={setFormValues}
              required
            />
            <Input
              label="Confirm New Password: "
              type="password"
              name="confirmPassword"
              onChange={setFormValues}
              required
            />
            <div style={style.buttonWrapper}>
              <Button onClick={changePassword}>Change Password</Button>
            </div>
          </form>
        </div>
        <div style={style.formWrapper}>
          <form onSubmit={deleteAccount} style={style.loginForm}>
            <Heading node="h3">
              <Words layer="alert">Delete Account</Words>
            </Heading>
            <Line animate />
            <Words layer="primary">
              <p>
                <em>Warning:</em> once you click this button, your account will
                be lost to the galaxy forever.
              </p>
            </Words>
            <div style={style.buttonWrapper}>
              <Button layer="alert" onClick={deleteAccount}>
                Delete Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
