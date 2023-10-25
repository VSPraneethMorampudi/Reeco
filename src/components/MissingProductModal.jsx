import React, { useState } from "react";
import Modal from "react-modal";

const MissingProductModal = ({ isOpen, onRequestClose, productName, onNoClick, onYesClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel="Missing Product Modal"
    >
      <h2>Missing Product</h2>
      <p>Is {productName} urgent?</p>
      <button onClick={onNoClick}>No</button>
      <button onClick={onYesClick}>Yes</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default MissingProductModal;
