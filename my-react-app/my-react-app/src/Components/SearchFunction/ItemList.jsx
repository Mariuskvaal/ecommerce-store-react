import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to product page

  // Handle search input
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter products based on the search term
    if (value) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear suggestions if no input
    }
  };

  // Handle click on a product
  const handleProductClick = (id) => {
    setSearchTerm(''); // Clear the search input
    setFilteredProducts([]); // Clear the suggestions
    navigate(`/product/${id}`); // Navigate to product page
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a product..."
      />
      {filteredProducts.length > 0 && (
        <ul className="suggestions">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="suggestion-item"
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
