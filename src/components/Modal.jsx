import React, { useState, cloneElement } from "react";
import Modal from "react-modal";
import { Content, Button, Frame } from "arwes";
import myTheme from "../theme/theme";


Modal.setAppElement("#root");

const [r, b, g] = myTheme.color.primary.baseRGB;
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
    padding: 0,
    backgroundColor: "transparent",
    color: myTheme.color.primary.base,
    fontFamily: myTheme.font.fontFamily.regular,
    fontSize: myTheme.font.baseSize,
  },
};

const style = {
  container: {
    // padding: "2rem",
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "none",
    overflow: "none",
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
    margin: "2rem",
  },
};

const CustomModal = ({
  children,
  buttonText,
  buttonLayer,
  buttonStyles,
  contentLabel,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let childrenArr = React.Children.toArray(children);
  if (childrenArr.length === 1) {
    childrenArr = React.cloneElement(childrenArr[0], {
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    });
  } else if (childrenArr.length > 0) {
    childrenArr = childrenArr.map((child) =>
      React.cloneElement(child, {
        openModal: () => openModal(),
        closeModal: () => closeModal(),
      })
    );
  }

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
        <Button onClick={openModal} layer={buttonLayer} style={buttonStyles}>
          {buttonText}
        </Button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={contentLabel || ""}
        >
          <Content style={style.container}>
            <Frame animate level={3} corners={4} style={style.frame}>
              {childrenArr}
            </Frame>
          </Content>
        </Modal>
      </Content>
    </div>
  );
};

export default CustomModal;
