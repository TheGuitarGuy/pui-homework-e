import React, { useState } from 'react';
import ProductSelector from './ProductSelector';
import './MainGrid.css';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import SortSelector from './SortSelector';
import ShoppingCart from './ShoppingCart';

const products = [
  { id: 1, name: 'Original Cinnamon Roll', basePrice: 2.49, glazing: 'Keep original', packSize: 1, image: 'solution-hw5/src/assets/products/original-cinnamon-roll.jpg' },
  { id: 2, name: 'Apple Cinnamon Roll', basePrice: 2.99, glazing: 'Sugar milk', packSize: 1, image: 'solution-hw5/src/assets/products/apple-cinnamon-roll.jpg' },
  { id: 3, name: 'Raisin Cinnamon Roll', basePrice: 2.99, glazing: 'Sugar milk', packSize: 6, image: 'solution-hw5/src/assets/products/raisin-cinnamon-roll.jpg' },
  { id: 4, name: 'Walnut Cinnamon Roll', basePrice: 3.49, glazing: 'Keep original', packSize: 1, image: 'solution-hw5/src/assets/products/walnut-cinnamon-roll.jpg' },
  { id: 5, name: 'Double Chocolate Cinnamon Roll', basePrice: 3.99, glazing: 'Vanilla milk', packSize: 1, image: 'solution-hw5/src/assets/products/double-chocolate-cinnamon-roll.jpg' },
  { id: 6, name: 'Strawberry Cinnamon Roll', basePrice: 3.99, glazing: 'Sugar milk', packSize: 6, image: 'solution-hw5/src/assets/products/strawberry-cinnamon-roll.jpg' },
];

const MainGrid = () => {
  const [cartItems, setCartItems] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const addToCart = (cartItem) => {
    setCartItems((prevItems) => [...prevItems, cartItem]);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleSearch = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleSort = (sortBy) => {
    let sortedProducts = [...filteredProducts];
    if (sortBy === 'name') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      sortedProducts.sort((a, b) => a.basePrice - b.basePrice);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="main-grid-container">
      <NavigationBar cartItems={cartItems} popupVisible={popupVisible} onCartClick={toggleCartVisibility} />

      {cartVisible && (
        <div className="shopping-cart-container">
          <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}

      <SearchBar products={products} onSearch={handleSearch} />
      <SortSelector onSort={handleSort} />

      <div className="main-grid-content">
        <div className="main-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductSelector key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <p>No match!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
