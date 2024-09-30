import React from "react";
import logo from '../assets/logo/logo-01.svg';

const NavigationBar = () => {
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
            <div id="cart-popup" className="cart-popup">
              <p>Added to cart:</p>
              <p>
                <span id="cart-items"></span>
              </p>
              <p>
                Total Amount: $<span id="cart-total-popup">0.00</span>
              </p>
            </div>
            <div className="cart-summary">
              <span id="cart-count">0</span> item(s)
              <div>
                Total: <span id="cart-total-amount">$0.00</span>
              </div>
            </div>
            <ul id="cart-items"></ul>
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
