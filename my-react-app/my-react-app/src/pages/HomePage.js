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

// Header Component
function Header() {
  return (
    <header>
      <h1>Welcome to My Homepage</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
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



