import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // This filters the products 
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    onSearch(filteredProducts);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        onChange={handleChange}
        value={searchInput}
        style={{ width: '200px', fontSize: '14px' }} 
        className="search-bar"
      />
      <button 
        onClick={handleSearch} 

      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
