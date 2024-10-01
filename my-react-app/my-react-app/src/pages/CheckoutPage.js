import React, { useContext } from 'react';
import { CartContext } from '../Components/Cart/CartContext';
import './pages.styling/CheckoutPage.css';

function CheckoutPage() {
  const { cart } = useContext(CartContext);

  // Calculate total sum of each product and total cost
  const totalCost = cart.reduce((sum, product) => sum + product.discountedPrice * product.quantity, 0);

  return (
    <div className="checkout-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h2>{product.title}</h2>
              <p>Quantity: {product.quantity}</p>
              <p>Total for this product: ${product.quantity * product.discountedPrice}</p>
            </div>
          ))}
          <div className="total-cost">
            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;



