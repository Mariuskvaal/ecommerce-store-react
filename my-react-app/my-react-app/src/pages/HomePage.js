// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Optional: For custom styling
import Navbar from '../Components/Navbar/Navbar'; // Import the Navbar component


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

// Main Section
function Main() {
  return (
    <main>
      <section>
        <h2>Introduction</h2>
        <p>This is the main section where content will go.</p>
      </section>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Homepage. All rights reserved.</p>
    </footer>
  );
}

export default HomePage;



