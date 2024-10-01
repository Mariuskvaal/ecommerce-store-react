// src/Components/Layout/Layout1.js
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the path if necessary
import Footer from '../Footer/Footer'; // Adjust the path if necessary
import './Layout1.css'; // Import the CSS for layout styling

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">
        {children} {/* This will render the content passed to the Layout */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

