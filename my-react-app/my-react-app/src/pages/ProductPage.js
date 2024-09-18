// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();  // Get the dynamic id from the route

  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing details for product ID: {id}</p>
    </div>
  );
}

export default ProductPage;
