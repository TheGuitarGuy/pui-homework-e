import React from 'react';
import './MainGrid.css';

const CartPopup = ({ cartItems, popupVisible }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div id="cart-popup" className={`cart-popup ${popupVisible ? 'active' : ''}`}>
      <p>Added to cart:</p>
      <ul id="cart-items">
        {cartItems.map((item, index) => (
          <li key={index}>
            Glazing: {item.glazing}, Pack Size: {item.packSize}, Price: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Amount: $<span id="cart-total-popup">{totalAmount}</span></p>
    </div>
  );
};

export default CartPopup;
