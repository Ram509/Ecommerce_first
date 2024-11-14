import React from "react";
import wallpaper from "../Assets/Logo/airpads_one.jpg";
import wallpaper1 from "../Assets/Logo/iphone.jpg";
import wallpaper2 from "../Assets/Logo/cooler.jpg";
import wallpaper3 from "../Assets/Logo/washing.jpg";
import wallpaper4 from "../Assets/Logo/shoe.jpg";
import wallpaper5 from "../Assets/Logo/led_one.jpg";
import wallpaper6 from "../Assets/Logo/trimmer.jpg";
import wallpaper7 from "../Assets/Logo/smartwatch.jpg";
import wallpaper8 from "../Assets/Logo/loptop.jpg";
import wallpaper9 from "../Assets/Logo/dress.jpg";
import "../Components/Css/HomeCategory.css";
// Categories data
const categories = [
  {
    id: 1,
    name: "Airpads",
    category: "Airphone",
    image: wallpaper, // Use the imported image
    one_price: 60.0,
    old_price: 70.0,
  },
  {
    id: 2,
    name: "iPhone",
    category: "Phone",
    image: wallpaper1, // Use the imported image
    one_price: 800.0,
    old_price: 900.0,
  },
  {
    id: 3,
    name: "Cooler",
    category: "Electronics",
    image: wallpaper2, // Use the imported image
    one_price: 120.0,
    old_price: 150.0,
  },
  {
    id: 4,
    name: "Washing Machine",
    category: "Electronics",
    image: wallpaper3, // Use the imported image
    one_price: 65.0,
    old_price: 75.0,
  },
  {
    id: 5,
    name: "Shoe",
    category: "Sports",
    image: wallpaper4, // Use the imported image
    one_price: 40.0,
    old_price: 70.0,
  },
  {
    id: 6,
    name: "LED",
    category: "Electronics",
    image: wallpaper5, // Use the imported image
    one_price: 65.0,
    old_price: 75.0,
  },
  {
    id: 7,
    name: "Trimmer",
    category: "Electronics",
    image: wallpaper6, // Use the imported image
    one_price: 45.0,
    old_price: 65.0,
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "Electronics",
    image: wallpaper7, // Use the imported image
    one_price: 85.0,
    old_price: 105.0,
  },
  {
    id: 9,
    name: "Loptop",
    category: "Electronics",
    image: wallpaper8, // Use the imported image
    one_price: 100.0,
    old_price: 120.0,
  },
  {
    id: 10,
    name: "Woman dress",
    category: "dress",
    image: wallpaper9, // Use the imported image
    one_price: 20.0,
    old_price: 35.0,
  },
];

const HomeCategory = () => {
  return (
    <div className="category-container">
      <h2>Product Categories</h2>
      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <img src={item.image} alt={item.name} className="category-image" />
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>
              Price: ${item.one_price.toFixed(2)}{" "}
              <span className="old-price">${item.old_price.toFixed(2)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
