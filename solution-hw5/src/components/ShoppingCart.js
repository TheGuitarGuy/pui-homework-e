import React from 'react';
import './MainGrid.css';

// Define the options object or import it
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

const getGlazingName = (glazingId) => {
  const glazingOption = options.glazing.find(option => option.id === glazingId);
  return glazingOption ? glazingOption.name : 'Unknown Glazing';
};

const ShoppingCart = ({ cartItems, setCartItems }) => {

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-header">
        <h2>Shopping Cart ({cartItems.length} items)</h2>
        <h3 className="total-cost">Total: ${totalCost}</h3>
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Glazing: {getGlazingName(item.glazing)}</p> 
                  <p>Pack Size: {item.packSize}</p>
                  <p style={{ fontWeight: 'bold' }}> ${item.price ? item.price.toFixed(2) : '0.00'}</p>
                  <button onClick={() => removeFromCart(item)} className="text-button"> Remove </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>

  );
};

export default ShoppingCart;
