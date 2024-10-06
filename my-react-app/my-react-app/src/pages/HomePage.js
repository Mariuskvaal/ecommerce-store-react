import React, { useState, useEffect } from 'react';
import Product from '../Components/product/product';
import './pages.styling/HomePage.css';
import shoppingmall from '../Components/Assets/image/shoppingmall.jpg'; // Import the shopping image

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
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
      {/* Updated Banner Section */}
      <div className="banner-section">
        <img src={shoppingmall} alt="Shopping Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-heading">Welcome to Our Store</h1>
          <button className="contact-button" onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>
        </div>
      </div>
      
      <h2> Our Products</h2>
      <div className="products">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;











