// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
