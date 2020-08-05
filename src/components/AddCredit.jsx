import React, { useState, useContext, useEffect } from "react";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Heading } from "arwes";
import SelectOption from "./Select";
import Radio from "./Radio";
import LabelText from "./LabelText";
import Textarea from "./Textarea";
import { FaTimesCircle } from "react-icons/fa";

const EditProfile = ({ closeModal, renderProfile }) => {
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

  const { id, token } = useContext(appContext);
  
  const [credits, setCredit] = useState(0);
  const [userCredits, setUserCredits] = useState(null)
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${id}`
      );
      const { user } = await res.json();
      setUserCredits(user.credit); 
    })();
  }, [id]);

  const setFormValues = (e) => {
    if (e.target.name === "credit") setCredit(e.target.value);

  };
  const submitForm = async (e) => {
    e.preventDefault();
    
    //TODO: fix this up 
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/fundcredits/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          credits: parseInt(credits)
        }),
      }
    );
    const data = res.json();
    if (data.error) {
      setErrors(data.error);
      alert("It looks like the IGBC network is having some problems processing your transfer of credits. Please try again later.")
    } else {
      closeModal();
      renderProfile();
    }
  };
  
  return (
    <div style={style.contentWrapper}>
      <Button onClick={closeModal}>
        <FaTimesCircle />
      </Button>
      <Heading node="h2" style={style.title}>
        Add Credit
      </Heading>
      <div style={{ padding: ".75rem", textAlign: "center" }}>
        <Words animate layer="alert">
          <p>{errors ? errors : " "}</p>
        </Words>
        <Words layer="primary">
          <p>Current Credit Balance: {userCredits}</p>
        </Words>
      </div>
      <div>
          <p>
        <Words layer="primary">
            Credits will automatically be deducted from your InterGalactic
            Banking Clan (IGBC) account.
        </Words>
          </p>
        <form onSubmit={submitForm} style={style.loginForm}>
          <Input
            label="Add Credits: "
            type="number"
            name="credit"
            onChange={setFormValues}
            required
            value={credits}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: ".5rem",
            }}
          >
            <Button onClick={submitForm} layer="success">
              Add Credits
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
