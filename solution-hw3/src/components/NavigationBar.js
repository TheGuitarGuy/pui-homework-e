import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css'; 

const Navbar = () => {
  console.log('Navbar loaded');
  return (
    <header>
      <nav>
        <img 
          id="company-logo" 
          src={require('../assets/logo/logo-01.svg').default} 
          alt="Company logo for Bun Bun Bake Shop"
        />
        <ul>
          <li id="cart-container">
            <Link id="cart-nav" to="/cart">Cart</Link>
            <div id="cart-popup" className="cart-popup">
              <p>Added to cart: </p>
              <p><span id="cart-items"></span></p>
              <p>Total Amount: $<span id="cart-total-popup">0.00</span></p>
            </div>
            <div className="cart-summary">
              <span id="cart-count">0</span> item(s)
              <div>Total: <span id="cart-total-amount">$0.00</span></div>
            </div>
          </li>
          <li id="products-nav-element">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <p className="info-header">Our hand-made cinnamon rolls</p>
    </header>
  );
};
export default Navbar;