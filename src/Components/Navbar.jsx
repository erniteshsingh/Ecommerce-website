import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          ShopZone
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-600 transition duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/create-product"
              className="hover:text-blue-600 transition duration-200"
            >
              Create Product
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/logout"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/create-product"
                className="hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Create Product
              </Link>
            </li>

            <div className="flex gap-3 mt-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition w-full text-center"
              >
                Login
              </Link>
              <Link
                to="/logout"
                onClick={() => setOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition w-full text-center"
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
