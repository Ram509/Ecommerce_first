import React, { useState, useEffect } from "react";
import "../Components/Css/HomePage.css";
import HomeCategory from "./HomeCartgory";
// import Banner_one from "../Assets/Logo/banner_one.jpg";
// import Banner_two from "../Assets/Logo/banner_two.jpg";
// import Banner_three from "../Assets/Logo/banner_three.jpg";
// import Banner_four from "../Assets/Logo/banner_four.jpg";
// import Banner_five from "../Assets/Logo/banner_five.jpg";
// import Banner_six from "../Assets/Logo/banner_six.jpg";
import Sale from "../Assets/Logo/sale.jpg";
import Sale_one from "../Assets/Logo/sale_one.jpg";
import Sale_two from "../Assets/Logo/sale_two.jpg";
import Sale_three from "../Assets/Logo/sale_three.jpg";
import Sale_four from "../Assets/Logo/sale_four.jpg";
import Left_arrow from "../Assets/Logo/left.png";
import Right_arrow from "../Assets/Logo/right.png";

const images = [
  // Banner_one,
  // Banner_two,
  // Banner_three,
  // Banner_four,
  // Banner_five,
  // Banner_six,
  Sale,
  Sale_one,
  Sale_two,
  Sale_three,
  Sale_four
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Pause the slider when it reaches the last image

  useEffect(() => {
    if (isPaused) return; // Stop the effect when paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setIsPaused(true); // Pause when the last image is reached
          return prevIndex;
        }
        return (prevIndex + 1) % images.length;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isPaused]);

  const nextImage = () => {
    setIsPaused(false); // Resume on manual navigation
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIsPaused(false); // Resume on manual navigation
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img src={image} alt={`banner ${index}`} className="slider-image" key={index} />
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="arrow left-arrow" onClick={prevImage}>
          <img src={Left_arrow} alt="Previous" />
        </button>
        <button className="arrow right-arrow" onClick={nextImage}>
          <img src={Right_arrow} alt="Next" />
        </button>
      </div>
      <h1>Exclusive</h1>
      <p>Premium Products</p>
      <HomeCategory />
    </div>
  );
};

export default Homepage;
