import React, { useState } from 'react';
import ProductSelector from './ProductSelector';
import './MainGrid.css';
import NavigationBar from './NavigationBar';

// This creates all the products for the interface
const products = [
  { id: 1, name: 'Original Cinnamon Roll', basePrice: 2.49 },
  { id: 2, name: 'Apple Cinnamon Roll', basePrice: 2.99 },
  { id: 3, name: 'Raisin Cinnamon Roll', basePrice: 2.99 },
  { id: 4, name: 'Walnut Cinnamon Roll', basePrice: 3.49 },
  { id: 5, name: 'Double Chocolate Cinnamon Roll', basePrice: 3.99 },
  { id: 6, name: 'Strawberry Cinnamon Roll', basePrice: 3.99 },
];

// This sets up the main page
const MainGrid = () => {
  const [cartItems, setCartItems] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const addToCart = (cartItem) => {
    setCartItems((prevItems) => [...prevItems, cartItem]);

    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="main-grid-container">
      <NavigationBar cartItems={cartItems} popupVisible={popupVisible} />
      
      <div className="main-grid">
        {products.map((product) => (
          <ProductSelector key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;