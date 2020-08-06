import React, { useState, cloneElement } from "react";
import Modal from "react-modal";
import { Content, Button, Frame, withStyles, Text } from "arwes";
import myTheme from "../theme/theme";


Modal.setAppElement("#root");

const [r, b, g] = myTheme.color.primary.baseRGB;
const modalStyles = {
  overlay: {
    backgroundColor: `rgba(${r},${g},${b},.15)`,
  },
  content: {
    top: 25,
    bottom: 25,
    margin: "0 auto",
    maxWidth: 600,
    border: "none",
    backgroundColor: "transparent",
  },
};

const styles = (theme) => ({
  container: {
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "none",
    overflow: "none",
    color: theme.color.primary.base,
    fontFamily: myTheme.font.fontFamily.regular,
    fontSize: myTheme.font.baseSize,
  },
  frame: {
    backgroundColor: myTheme.color.background.main,
    margin: "1rem",
  },
});

const CustomModal = withStyles(styles)(({
  classes,
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
            style={modalStyles}
            contentLabel={contentLabel || ""}
          >
            <Content className={classes.container}>
              <Frame animate level={3} corners={4} className={classes.frame}>
                {childrenArr}
              </Frame>
            </Content>
          </Modal>
        </Content>
    </div>
  );
});

export default CustomModal;
