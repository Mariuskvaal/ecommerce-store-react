import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate from react-router-dom

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle the search input
  const [cartItems, setCartItems] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]); // Hold the product data from API

  const navigate = useNavigate();  // React Router hook to navigate programmatically

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Show/Hide search input field
  };

  const handleSearchInput = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products based on the search term
    if (value) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Function to handle click on search result item
  const handleSearchItemClick = (productId) => {
    setFilteredProducts([]);  // Clear the search results
    setSearchTerm('');  // Clear the search term
    setIsSearchOpen(false);  // Close the search input
    navigate(`/product/${productId}`);  // Navigate to the product page
  };

  // Fetch products from the API when the component mounts
  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);  // Ensure the correct structure is used (data.data)
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">MyLogo</div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/productPage" onClick={toggleMenu}>Products</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          {/* Other navigation links */}
        </div>

        <div className="navbar-icons">
          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />

          {/* Cart Icon */}
          <div className="navbar-cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </div>

          {/* Hamburger Menu */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
            )}
          </div>
        </div>
      </nav>

      {/* Search Input Outside Navbar */}
      {isSearchOpen && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchInput}
          />
          {filteredProducts.length > 0 && (
            <div className="search-results">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="search-result-item"
                  onClick={() => handleSearchItemClick(product.id)}  // Navigate on click
                >
                  <img
                    src={product.image?.url}
                    alt={product.image?.alt || product.title}
                    className="search-result-image"
                  />
                  <span>{product.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;



