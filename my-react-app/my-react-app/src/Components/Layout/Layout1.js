// src/Components/Layout/Layout.js
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the path if necessary
import Footer from '../Footer/Footer'; // Adjust the path if necessary

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children} {/* This will render the content passed to the Layout */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
