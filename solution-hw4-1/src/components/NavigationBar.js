import React from 'react';
import logo from '../assets/logo/logo-01.svg';

const NavigationBar = ({ cartItems, popupVisible }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <header>
      <nav>
        <img
          id="company-logo"
          src={logo}
          alt="Company logo for Bun Bun Bake Shop showing a drawing of a cinnamon roll"
        />

        <ul>
          <li id="cart-container">
            <a id="cart-nav" href="cart.html">Cart</a>

            {/* Dynamically show the cart popup */}
            <div id="cart-popup" className={`cart-popup ${popupVisible ? 'active' : 'inactive'}`}>
              <p>Item added to cart!</p>
              <p>Total items: {cartItems.length}</p>
              <p>Total Amount: ${totalAmount}</p>
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
