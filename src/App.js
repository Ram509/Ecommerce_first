import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import Womens from "./Pages/Womens";
import Footwear from "./Pages/Footwear";
import Kids from "./Pages/Kids";
import Bags from "./Pages/Bags";
import Mens from "./Pages/Mens";
import Login from "./Pages/Login";
import PageNav from "./Components/PageNav";
import Footer from "./Components/Footer/Footer"
import AddCart from "./Pages/AddCart";
const App = () => {
  return (
    <BrowserRouter>
    <PageNav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="womens" element={<Womens />} />
        <Route path="mens" element={<Mens />} />
        <Route path="footwear" element={<Footwear />} />
        <Route path="kids" element={<Kids />} />
        <Route path="bags" element={<Bags />} />
        <Route path="login" element={<Login />} />
        <Route path="addcart" element={<AddCart />}/>
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
