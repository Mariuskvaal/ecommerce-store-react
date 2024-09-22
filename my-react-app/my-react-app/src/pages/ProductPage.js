import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Product({ product }) {
  if (!product) {
    // If the product object is undefined or null, display a fallback message
    return <div>Product data not available</div>;
  }

  return (
    <div className="product-card">
      {product.image ? (
        <img src={product.image.url} alt={product.image.alt} />
      ) : (
        <p>No image available</p>
      )}
      <h3>{product.title || 'No title available'}</h3>
      <p>{product.description || 'No description available'}</p>
      <p>Price: ${product.discountedPrice || 'N/A'}</p>
      {/* Link to the ProductPage with the product's UUID */}
      <Link to={`/product/${product.id}`} className="view-product-button">
        View Product
      </Link>
    </div>
  );
}

export default Product;






