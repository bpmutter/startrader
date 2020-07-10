import React from "react";
import Modal from "./Modal";
import AddCredit from "./AddCredit";

const AddCreditModal = ({ buttonStyles, renderProfile }) => {
  return (
    <Modal buttonLayer="success" buttonText="Add Credits" buttonStyles={buttonStyles}>
      <AddCredit renderProfile={() => renderProfile()} />
    </Modal>
  );
};

export default AddCreditModal;
