// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.image.url} alt={product.image.alt} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      {/* Link to the ProductPage with the product's ID */}
      <Link to={`/product/${product.id}`} className="view-product-button">
        View Product
      </Link>
    </div>
  );
}

export default Product;
