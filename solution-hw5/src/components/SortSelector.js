import React from 'react';

const SortSelector = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="sort-select-container">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="name">Name (A-Z)</option>
        <option value="price">Price (Low to High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
