import React from "react";
import Modal from "./Modal";
import BuyShip from './BuyShip';

const BuyShipModal = ({ rerenderParent, ship }) => {
  return (
    <Modal buttonText="Buy Ship" buttonLayer="success">
      <BuyShip ship={ship} rerenderParent={rerenderParent} />
    </Modal>
  );
};

export default BuyShipModal;
