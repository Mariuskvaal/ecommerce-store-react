import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './pages.styling/CheckoutSuccessPage.css';

function CheckoutSuccessPage() {
  return (
    <div className="checkout-success-page">
      <h1>
        <FontAwesomeIcon icon={faCheckCircle} className="checkmark-icon" />
        Order Successful!
      </h1>
      <p>Thank you for your purchase. Your order was placed successfully.</p>
      <Link to="/" className="back-to-store-link">
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;


