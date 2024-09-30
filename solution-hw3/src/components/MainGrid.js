import React from 'react';
import ProductSelector from './ProductSelector';
import './MainGrid.css'; 

// This is how I found to map each product to their details
const products = [
  { id: 1, image: 'original-cinnamon-roll.jpg', name: 'Original Cinnamon Roll', basePrice: 2.49 },
  { id: 2, image: 'apple-cinnamon-roll.jpg', name: 'Apple Cinnamon Roll', basePrice: 2.99 },
  { id: 3, image: 'raisin-cinnamon-roll.jpg', name: 'Raisin Cinnamon Roll', basePrice: 2.99 },
  { id: 4, image: 'walnut-cinnamon-roll.jpg', name: 'Walnut Cinnamon Roll', basePrice: 3.49 },
  { id: 5, image: 'double-chocolate-cinnamon-roll.jpg', name: 'Double Chocolate Cinnamon Roll', basePrice: 3.99 },
  { id: 6, image: 'strawberry-cinnamon-roll.jpg', name: 'Strawberry Cinnamon Roll', basePrice: 3.99 },
];

const MainGrid = () => {
  console.log("MainGrid component is rendering");

  return (
    <div className="main-grid">
      {products.map(product => (
        <ProductSelector key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainGrid;
