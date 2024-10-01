import React from 'react';
import './SuccessModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <FontAwesomeIcon icon={faCheckCircle} className="modal-icon" />
        <h2>Thank You!</h2>
        <p>Your details have been successfully submitted. Thanks!</p>
        <button className="modal-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
