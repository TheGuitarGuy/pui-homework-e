import React from 'react';
import logo from '../assets/logo/logo-01.svg';

// This is the navigation bar component which houses the logo, nav buttons, and the toggled cart popup.
const NavigationBar = ({ cartItems, popupVisible }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  
  // Get the most recent cart item
  const lastCartItem = cartItems.length > 0 ? cartItems[cartItems.length - 1] : null;

  return (
    <header>
      <nav>
        <img
          id="company-logo"
          src={logo}
          alt="Company logo for Bun Bun Bake Shop showing a drawing of a cinnamon roll"
        />

        <ul>
          {/* This contains some of the cart popup logic */}
          <li id="cart-container">
            <a id="cart-nav" href="cart.html">Cart</a>

            <div id="cart-popup" className={`cart-popup ${popupVisible ? 'active' : 'inactive'}`}>
              <p>Added to cart:</p>

              {/* Only display the most recent item in the cart */}
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

            {/* This is the cart summary at the top right */}
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
