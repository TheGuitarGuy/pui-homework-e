import React, { useState } from 'react';
import './ProductSelector.css';

import originalCinnamonRoll from '../assets/products/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../assets/products/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../assets/products/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../assets/products/walnut-cinnamon-roll.jpg';
import doubleChocolateCinnamonRoll from '../assets/products/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../assets/products/strawberry-cinnamon-roll.jpg';

const ProductSelector = ({ product }) => {
  const { id, name, basePrice } = product;
  const [selectedPack, setSelectedPack] = useState(1);

  
  const imageMap = {
    1: originalCinnamonRoll,
    2: appleCinnamonRoll,
    3: raisinCinnamonRoll,
    4: walnutCinnamonRoll,
    5: doubleChocolateCinnamonRoll,
    6: strawberryCinnamonRoll,
  };

  return (
    <div className="product-selector" id={`product-${id}`}>
      <img src={imageMap[id]} alt={`picture of ${name}`} />
      <h4>{name}</h4>

      {/* Glazing Option */}
      <div className="glazing-option-container">
        <label>Glazing:</label>
        <select name="Glazing" className="glazing-option">
          <option value="original">Keep original</option>
          <option value="sugar">Sugar Milk</option>
          <option value="vanilla">Vanilla Milk</option>
          <option value="chocolate">Double Chocolate</option>
        </select>
      </div>

      {/* Pack Size */}
      <div className="pack-size-container">
        {[1, 3, 6, 12].map((packSize) => (
          <React.Fragment key={packSize}>
            <input 
              type="radio" 
              id={`pack${packSize}-${id}`} 
              name={`pack-size-${id}`} 
              value={packSize} 
              checked={selectedPack === packSize}
              onChange={() => setSelectedPack(packSize)}
            />
            <label htmlFor={`pack${packSize}-${id}`} className="pack-size-button">
              {packSize}
            </label>
          </React.Fragment>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="cart-button-container">
        <label>
          <span className="price-label" baseprice={basePrice}>${basePrice.toFixed(2)}</span>
        </label>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductSelector;
