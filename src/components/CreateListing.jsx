import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import appContext from "./Context";
import Input from "./Input";
import { Words, Button, Content, Heading } from "arwes";
import Frame from "arwes/lib/Frame";
import SelectOption from "./Select";
import Radio from "./Radio";
import LabelText from "./LabelText";
import Textarea from "./Textarea";

const  CreateListing = () => {
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
  const [successfulPost, setSuccessfulPost] = useState();
  const [shipTypes, setShipTypes] = useState([]);
  const [ship_type, setSelectedShipType] = useState(1);
  const [custom_name, setCustomName] = useState(null);
  const [sale_price, setSalePrice] = useState(0);
  const [lightyears_traveled, setLightyearsTraveled] = useState(0);
  const [seller_comment, setComment] = useState("");
  const [for_sale, setForSale] = useState("true");

  const [errors, setErrors] = useState(null);
  const { user: {id}, token } = useContext(appContext);
  console.log("AUTH TOKEN::", token);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/ships/types");
      const { ship_types } = await res.json();
      const nonUniques = ship_types.filter(ship => ship.unique === false);
      setShipTypes(nonUniques);
      setSelectedShipType(nonUniques[0].id);
    })();
  }, []);

  const setFormValues = (e) => {
    switch (e.target.name) {
        case "ship_type": 
            setSelectedShipType(e.target.value);
            break;
        case "custom_name":
            setCustomName(e.target.value);
            break;
        case "sale_price":
            setSalePrice(e.target.value);
            break;
        case "lightyears_traveled":
            setLightyearsTraveled(e.target.value);
            break;
        case "for_sale":
            setForSale(e.target.value);
            break;
        case "seller_comment":
            setComment(e.target.value);
            break;
        default:
            return;
    }
        
  };
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/ships/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ship_type,
          custom_name,
          sale_price: parseInt(sale_price),
          lightyears_traveled: parseInt(lightyears_traveled),
          seller_comment,
          for_sale: for_sale === "true",
          owner: id,
        }),
      });
      const data = await res.json();

      if (data.error) {
        setErrors(data.error);
        return;
      } else { 
        console.log(data)
        setSuccessfulPost(data.starship);
      }
    } catch (err) {
      alert(
        "Oh no, it looks like there was some force interference causing problems with our server. Please try again later."
      );
    }
  };

  return (
    <div>
      {successfulPost ? (
        <Redirect to={`/listings/${successfulPost.id}`} />
      ) : (
        <Content style={style.container}>
          <Frame animate level={3} corners={4} style={style.frame}>
            <div style={style.contentWrapper}>
              <Heading node="h2" style={style.title}>
                Sell Your Starship
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
                  <SelectOption
                    label="Ship Type: "
                    name="ship_type"
                    onChange={setFormValues}
                    options={shipTypes}
                    optionValueId={"id"} 
                    optionInnerContent={"type_name"}
                    required
                  />
                  <Input
                    label="Custom Name: "
                    type="text"
                    name="custom_name"
                    onChange={setFormValues}
                  />
                  <Input
                    label="Price: "
                    type="number"
                    name="sale_price"
                    onChange={setFormValues}
                    required
                  />
                  <Input
                    label="Lightyears Traveled: "
                    type="number"
                    name="lightyears_traveled"
                    onChange={setFormValues}
                    required
                  />
                  <p style={{ padding: ".5rem 0" }}>
                    <LabelText label="For Sale: " required />
                    <Radio
                      name="for_sale"
                      value="true"
                      checked={for_sale === 'true'}
                      onChange={setFormValues}
                      label="Yes"
                    />
                    <Radio
                      name="for_sale"
                      value="false"
                      checked={for_sale === 'false'}
                      onChange={setFormValues}
                      label="Not Right Now"
                    />
                  </p>
                  <Textarea
                    label="Comment: "
                    type="textarea"
                    name="seller_comment"
                    onChange={setFormValues}
                  />
                  <p style={{ textAlign: "center" }}>
                    <Button>List Ship</Button>
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

export default CreateListing;
