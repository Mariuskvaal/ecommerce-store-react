import React, { useContext } from 'react';
import { CartContext } from '../Components/Cart/CartContext';
import { useNavigate } from 'react-router-dom';
import './pages.styling/CheckoutPage.css';

function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total sum of each product and total cost
  const totalCost = cart.reduce((sum, product) => sum + product.discountedPrice * product.quantity, 0);

  const handleCheckout = () => {
    clearCart(); // Clear the cart
    navigate('/checkout-success'); // Navigate to the success page
  };

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
              <p>Price per unit: ${product.discountedPrice.toFixed(2)}</p>
              <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                min="1"
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
              />
              <p>Total for this product: ${(product.quantity * product.discountedPrice).toFixed(2)}</p>
              <button className="remove-button" onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="total-cost">
            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
          </div>
          <button onClick={handleCheckout} className="checkout-button">
  Checkout
</button>

        </div>
      )}
    </div>
  );
}

export default CheckoutPage;






