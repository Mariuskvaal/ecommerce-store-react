// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import Product from '../Components/product/product';  // Import the Product component
import './pages.styling/HomePage.css';  // Optional: For custom styling

function HomePage() {
  const [products, setProducts] = useState([]);  // State to hold the products
  const [loading, setLoading] = useState(true);  // State to show loading state
  const [error, setError] = useState(null);      // State to show error message

  // Fetch products when the component mounts
  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data);  // Ensure you are using the right API response structure
        setLoading(false);   // Disable loading state
      })
      .catch((error) => {
        setError(error.message);  // Set error message
        setLoading(false);        // Disable loading state
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="HomePage">
      <h2>Products</h2>
      <div className="products">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />  // Pass the correct UUID for each product
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;







