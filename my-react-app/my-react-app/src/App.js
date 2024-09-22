// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing necessary Router components
import Layout from './Components/Layout/Layout1';  // Import Layout component
import HomePage from './pages/HomePage';  // Import HomePage
import ContactPage from './pages/ContactPage';  // Import ContactPage
import ProductPage from './pages/ProductPage';  // Import ProductPage
import CheckoutPage from './pages/CheckoutPage';  // Import CheckoutPage
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';  // Import CheckoutSuccessPage
import './App.css';  // Optional: For global styling

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Home page route */}
          <Route path="/contact" element={<ContactPage />} />  {/* Contact page route */}
          <Route path="/product/:id" element={<ProductPage />} />  {/* Product page with dynamic ID route */}
          <Route path="/checkout" element={<CheckoutPage />} />  {/* Checkout page route */}
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />  {/* Checkout Success page route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;




