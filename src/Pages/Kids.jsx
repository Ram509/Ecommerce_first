import React from "react";
import "../Components/Css/Kids.css";
import { kids } from "../Assets/Kids/Kids";
const Kid = () => {
  return (
    <div>
      <div className="women-collection">
        {kids.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p className="price">
              <span className="new-price">${item.new_price.toFixed(2)}</span>
              <span className="old-price">
                <s>${item.old_price.toFixed(2)}</s>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kid;
