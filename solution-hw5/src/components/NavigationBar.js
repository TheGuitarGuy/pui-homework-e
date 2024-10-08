import React from 'react';
import logo from '../assets/logo/logo-01.svg';

const NavigationBar = ({ cartItems, popupVisible, onCartClick }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const lastCartItem = cartItems.length > 0 ? cartItems[cartItems.length - 1] : null;

  return (
    <header>
      {/* This is the top navigation */}
      <nav>
        <img
          id="company-logo"
          src={logo}
          alt="Company logo for Bun Bun Bake Shop showing a drawing of a cinnamon roll"
        />

        <ul>
          <li id="cart-container">
            <a id="cart-nav" href="#" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
              Cart
            </a>

            <div id="cart-popup" className={`cart-popup ${popupVisible ? 'active' : 'inactive'}`}>
              <p>Added to cart:</p>
              {lastCartItem ? (
                <div>
                  <p id="lastCartItem">{lastCartItem.name}</p>
                  <p>{lastCartItem.glazing}</p>
                  <p>Pack of {lastCartItem.packSize}</p>
                  <p>Price: ${lastCartItem.price}</p>
                </div>
              ) : (
                <p>No items in the cart</p>
              )}
            </div>

            <div className="cart-summary">
              <span id="cart-count">{cartItems.length}</span> item(s)
              <div>
                Total: <span id="cart-total-amount">${totalAmount}</span>
              </div>
            </div>
          </li>
          <li id="products-nav-element">
            <a href="products.html">Products</a>
          </li>
        </ul>
      </nav>
      <p className="info-header">Our hand-made cinnamon rolls</p>
    </header>
  );
};

export default NavigationBar;
