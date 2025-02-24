import React, { useContext, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Links from './Links';
import data from "../Database/data";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

const Navbar = () => {
  const cart = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function searchHandler() {
    if (!searchInput.trim()) {
      console.log("Search input is empty");
      return;
    }
  
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
  
    console.log(filteredData); 
  }
  


  return (
    <nav className="nav bg-white shadow-lg p-4 flex items-center justify-between md:px-8">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-gray-800">E-Shop</div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-grow mx-6 relative">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 pl-5 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={searchHandler}
         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
          <BiSearch className="w-5 h-5" />
        </button>
      </div>

      {/* Icons */}
      <div className="hidden md:flex items-center gap-6 text-2xl text-gray-600">
        <LuHeart className="cursor-pointer hover:text-red-500 transition duration-300" />
        <Link className="relative" to='/cart'>
          <AiOutlineShoppingCart className="cursor-pointer hover:text-green-500 transition duration-300" />
          <sup className="absolute -top-1 -right-2">{cart.items.length}</sup>
        </Link>
        <FaRegUser className="cursor-pointer hover:text-blue-500 transition duration-300" />
      </div>

      <button className="md:hidden text-3xl text-gray-800" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center p-6 space-y-4 md:hidden z-60">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 pl-5 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <BiSearch className="w-5 h-5" />
            </button>
          </div>
          <LuHeart className="text-3xl cursor-pointer hover:text-red-500 transition duration-300" />
          <Link to='/cart' className="relative">
            <AiOutlineShoppingCart className="text-3xl cursor-pointer hover:text-green-500 transition duration-300" />
            <sup className="absolute -top-4 -right-4 font-bold text-white bg-black py-3 px-2 rounded-full">{cart.items.length}</sup>
          </Link>
          <FaRegUser className="text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
        </div>
      )}

      <Links />
    </nav>
  );
};

export default Navbar;
