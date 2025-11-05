import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/AuthSlice";
const Navbar = () => {
  const loginedUser = useSelector((state) => state.auth.loginuser);

  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          ShopZone
        </Link>

        {/* Desktop Menu */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/create-product"
              className="hover:text-blue-600 transition"
            >
              Create Product
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {!loginedUser || !loginedUser.isLogedin ? (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={() => dispatch(logout())}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
