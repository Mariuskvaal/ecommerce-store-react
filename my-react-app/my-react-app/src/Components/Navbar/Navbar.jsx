import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate from react-router-dom
import { CartContext } from '../Cart/CartContext';  // Import CartContext

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const { cart } = useContext(CartContext);  // Get the cart from CartContext

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchInput = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSearchItemClick = (productId) => {
    setFilteredProducts([]);
    setSearchTerm('');
    setIsSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  // Fetch products from the API when the component mounts
  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleCartClick = () => {
    navigate('/checkout');
  };

  // Calculate the total quantity of items in the cart
  const totalCartQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <span className="navbar-logo-text">React Store</span>
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>

          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>

        <div className="navbar-icons">
          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />

          {/* Cart Icon */}
          <div className="navbar-cart" onClick={handleCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {totalCartQuantity > 0 && <span className="cart-count">{totalCartQuantity}</span>}
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
                  onClick={() => handleSearchItemClick(product.id)}
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





