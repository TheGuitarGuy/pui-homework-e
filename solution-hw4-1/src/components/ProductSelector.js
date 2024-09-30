import React, { useState, useEffect } from 'react';
import './ProductSelector.css';

import originalCinnamonRoll from '../assets/products/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../assets/products/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../assets/products/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../assets/products/walnut-cinnamon-roll.jpg';
import doubleChocolateCinnamonRoll from '../assets/products/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../assets/products/strawberry-cinnamon-roll.jpg';

const options = {
  glazing: [
    { id: 'keep-original', name: 'Keep original', priceChange: 0.00 },
    { id: 'sugar-milk', name: 'Sugar milk', priceChange: 0.00 },
    { id: 'vanilla-milk', name: 'Vanilla milk', priceChange: 0.50 },
    { id: 'double-chocolate', name: 'Double chocolate', priceChange: 1.50 }
  ],
  packSize: [
    { id: 1, size: 1, priceMultiple: 1 },
    { id: 3, size: 3, priceMultiple: 3 },
    { id: 6, size: 6, priceMultiple: 5 },
    { id: 12, size: 12, priceMultiple: 10 }
  ]
};

const calculatePrice = (basePrice, glazingId, packSizeId) => {
  const glazingOption = options.glazing.find((g) => g.id === glazingId);
  const packSizeOption = options.packSize.find((p) => p.id === parseInt(packSizeId));
  const glazingPriceChange = glazingOption ? glazingOption.priceChange : 0;
  const packSizeMultiple = packSizeOption ? packSizeOption.priceMultiple : 1;

  return ((basePrice + glazingPriceChange) * packSizeMultiple).toFixed(2);
};

const ProductSelector = ({ product, addToCart }) => {
  const { id, name, basePrice } = product;

  const [selectedGlazing, setSelectedGlazing] = useState('keep-original');
  const [selectedPack, setSelectedPack] = useState(1);
  const [price, setPrice] = useState(basePrice);

  const imageMap = {
    1: originalCinnamonRoll,
    2: appleCinnamonRoll,
    3: raisinCinnamonRoll,
    4: walnutCinnamonRoll,
    5: doubleChocolateCinnamonRoll,
    6: strawberryCinnamonRoll,
  };

  useEffect(() => {
    const newPrice = calculatePrice(basePrice, selectedGlazing, selectedPack);
    setPrice(newPrice);
  }, [selectedGlazing, selectedPack, basePrice]);

  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      glazing: selectedGlazing,
      packSize: selectedPack,
      price: parseFloat(price),
    };
    
    addToCart(cartItem); // Call the addToCart function passed from MainGrid
  };

  return (
    <div className="product-selector" id={`product-${id}`}>
      <img src={imageMap[id]} alt={`picture of ${name}`} />
      <h4>{name}</h4>

      {/* Glazing Option */}
      <div className="glazing-option-container">
        <label>Glazing:</label>
        <select
          name="Glazing"
          className="glazing-option"
          value={selectedGlazing}
          onChange={(e) => setSelectedGlazing(e.target.value)}
        >
          {options.glazing.map((glaze) => (
            <option key={glaze.id} value={glaze.id}>
              {glaze.name}
            </option>
          ))}
        </select>
      </div>

      {/* Pack Size */}
      <div className="pack-size-container">
        {options.packSize.map((packSize) => (
          <React.Fragment key={packSize.id}>
            <input
              type="radio"
              id={`pack${packSize.size}-${id}`}
              name={`pack-size-${id}`}
              value={packSize.id}
              checked={selectedPack === packSize.id}
              onChange={() => setSelectedPack(packSize.id)}
            />
            <label htmlFor={`pack${packSize.size}-${id}`} className="pack-size-button">
              {packSize.size}
            </label>
          </React.Fragment>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="cart-button-container">
        <label>
          <span className="price-label">${price}</span>
        </label>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSelector;
