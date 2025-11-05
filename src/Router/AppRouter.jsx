import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Products from "../Pages/Product";
import CreateProduct from "../Pages/CreateProduct";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
