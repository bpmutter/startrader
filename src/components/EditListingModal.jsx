import React, {useState, useContext, useEffect} from "react";
import Modal from "react-modal";
import {Content, Button, Frame, Heading, Words} from 'arwes';
import myTheme from '../theme/theme';
import {FaTimesCircle} from 'react-icons/fa';
import appContext from './Context';
import SelectOption from './Select';
import Input from './Input'
import Radio from './Radio';
import LabelText from './LabelText';
import Textarea from './Textarea';

Modal.setAppElement("#root");

const [r,b,g] = myTheme.color.primary.baseRGB;
const customStyles = {
  overlay: {
    backgroundColor: `rgba(${r},${g},${b},.15)`,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    border: "none",
    backgroundColor: "transparent",
    padding: 0,
  },
};


const style = {
  container: {
    // padding: "2rem",
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: 'none',
    overflow: 'none'
  },
  title: {
    textAlign: "center",
    margin: "1rem",
  },
  contentWrapper: {
    margin: "2rem",
  },
  frame: {
    backgroundColor: myTheme.color.background.main,
    margin: '5px',
  },
};

const EditListingModal = ({ listing, rerenderParent }) => {
  const [successfulPost, setSuccessfulPost] = useState();
  const [shipTypes, setShipTypes] = useState([]);
  const [ship_type, setSelectedShipType] = useState(listing.ship_type);
  const [custom_name, setCustomName] = useState(listing.custom_name);
  const [sale_price, setSalePrice] = useState(listing.sale_price);
  const [lightyears_traveled, setLightyearsTraveled] = useState(
    listing.lightyears_traveled
  );
  const [seller_comment, setComment] = useState(listing.seller_comment);
  const [for_sale, setForSale] = useState(listing.for_sale ? "true" : "false");

  const [errors, setErrors] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    user: { id },
    token,
  } = useContext(appContext);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ships/types`);
      const { ship_types } = await res.json();
      const nonUniques = ship_types.filter((ship) => ship.unique === false);
      setShipTypes(nonUniques);
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
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/ships/update/${listing.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
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
        }
      );
      const data = await res.json();

      if (data.error) {
        setErrors(data.error);
        return;
      } else {
        closeModal();
        rerenderParent();
      }
    } catch (err) {
      console.error("NEW ERROR::", err);
      alert(
        "Oh no, it looks like there was some force interference causing problems with our server. Please try again later."
      );
    }
  };
  // let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = "#000";
  // }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Content>
        <Button onClick={openModal}>Edit Listing</Button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Content style={style.container}>
            <Frame animate level={3} corners={4} style={style.frame}>
              <div style={style.contentWrapper}>
                <Button onClick={closeModal}>
                  <FaTimesCircle />
                </Button>
                <Heading node="h2" style={style.title}>
                  Update Your Listing
                </Heading>
                <div
                  style={{
                    padding: ".75rem .75rem .75rem",
                    textAlign: "center",
                  }}
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
                      selected={ship_type}
                    />
                    <Input
                      label="Custom Name: "
                      type="text"
                      name="custom_name"
                      onChange={setFormValues}
                      value={custom_name}
                    />
                    <Input
                      label="Price: "
                      type="number"
                      name="sale_price"
                      onChange={setFormValues}
                      required
                      value={sale_price}
                    />
                    <Input
                      label="Lightyears Traveled: "
                      type="number"
                      name="lightyears_traveled"
                      onChange={setFormValues}
                      required
                      value={lightyears_traveled}
                    />
                    <p style={{ padding: ".5rem 0" }}>
                      <LabelText label="For Sale: " required />
                      <Radio
                        name="for_sale"
                        value="true"
                        checked={for_sale === "true"}
                        onChange={setFormValues}
                        label="Yes"
                      />
                      <Radio
                        name="for_sale"
                        value="false"
                        checked={for_sale === "false"}
                        onChange={setFormValues}
                        label="Not Right Now"
                      />
                    </p>
                    <Textarea
                      label="Comment: "
                      type="textarea"
                      name="seller_comment"
                      onChange={setFormValues}
                      value={seller_comment}
                    />
                    <p style={{ textAlign: "center" }}>
                      <Button>Update Listing</Button>
                    </p>
                  </form>
                </div>
              </div>
            </Frame>
          </Content>
        </Modal>
      </Content>
    </div>
  );
};

export default EditListingModal;
