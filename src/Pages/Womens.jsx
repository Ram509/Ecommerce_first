import React from "react";
import { useState } from "react";
import { womens_list } from "../Assets/Womens/Womens";
import "../Components/Css/Womens.css";

const WomenList = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]); // Add the selected item to the cart
    console.log(`Added to cart: ${item.name}`);
  };

  return (
    <div>
      <div className="women-collection">
        {womens_list.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p className="price">
              <span className="new-price">${item.new_price.toFixed(2)}</span>
              <span className="old-price">
                <s>${item.old_price.toFixed(2)}</s>
              </span>
            </p>
            {/* Add to Cart Button */}
            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Display the Cart */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((cartItem, index) => (
              <li key={index}>
                {cartItem.name} - ${cartItem.new_price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WomenList;
