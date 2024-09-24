import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get the route parameters
import Product from '../Components/product/product';

function ProductPage() {
  const { id } = useParams();  // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);  // State to hold the product details
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  // Fetch the product details using the product ID
  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data.data);  // Access the product details from 'data'
        console.log(data.data);
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        setError(error.message);  // Store error message
        setLoading(false);  // Stop loading
      });
  }, [id]);  // The effect depends on the 'id' param

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          {/* Optional chaining to safely access the image URL */}
          {product.image?.url ? (
            <img src={product.image.url} alt={product.image.alt || 'Product image'} />
          ) : (
            <p>No image available</p>
          )}
          <p>{product.description}</p>
          <p>Price: ${product.discountedPrice}</p>
          
          {/* Display discount if applicable */}
          {product.price !== product.discountedPrice && (
            <p>
              Original Price: <del>${product.price}</del> 
              <br />
              You save: {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%!
            </p>
          )}
          
          <p>Rating: {product.rating}/5</p>
  
          {/* Display reviews */}
          {product.reviews && product.reviews.length > 0 ? (
            <div>
              <h2>Reviews:</h2>
              <ul>
                {product.reviews.map((review) => (
                  <li key={review.id}>
                    <p><strong>{review.username}</strong> ({review.rating}/5):</p>
                    <p>{review.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
  
}

export default ProductPage;









