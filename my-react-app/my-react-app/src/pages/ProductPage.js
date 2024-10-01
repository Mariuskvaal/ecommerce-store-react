import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Components/Cart/CartContext';  // Import CartContext
import './pages.styling/ProductPage.css';  // Import the new CSS file

function ProductPage() {
  const { id } = useParams();  // Get the product ID from the route parameters
  const [product, setProduct] = useState(null);  // State to hold the product details
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state
  const { addToCart } = useContext(CartContext);  // Get addToCart function from CartContext

  // Fetch the product details using the product ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        setProduct(data.data);  // Access the product details from 'data'
        setLoading(false);  // Stop loading
      } catch (error) {
        setError(error.message);  // Store error message
        setLoading(false);  // Stop loading
      }
    };

    fetchProduct();  // Call the function to fetch product details
  }, [id]);  // The effect depends on the 'id' param

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);  // Add the current product to the cart using the addToCart function from CartContext
      console.log('Product added to cart:', product);
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-page">
      {product ? (
        <>
          <div className="product-container">
            <div className="image-container">
              {product.image?.url ? (
                <img src={product.image.url} alt={product.image.alt || 'Product image'} />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="details-container">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p className="price">Price: ${product.discountedPrice}</p>
              
              {product.price !== product.discountedPrice && (
                <p className="original-price">
                  Original Price: <del>${product.price}</del> 
                  <br />
                  <span className="discount">
                    You save: {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%!
                  </span>
                </p>
              )}
              <button onClick={handleAddToCart} className="add-to-cart-button">
                Add to Cart
              </button>
              <p>Rating: {product.rating}/5</p>
            </div>
          </div>

          <div className="reviews">
            {product.reviews && product.reviews.length > 0 ? (
              <>
                <h2>Reviews:</h2>
                <ul>
                  {product.reviews.map((review) => (
                    <li key={review.id}>
                      <p><strong>{review.username}</strong> ({review.rating}/5):</p>
                      <p>{review.description}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
}

export default ProductPage;














