import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Adidas from "./pages/Adidas";
import Nike from "./pages/Nike";
import Puma from "./pages/Puma";
import Vans from "./pages/Vans";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const location = useLocation(); // Get current route
  const hideNavbarSidebar = location.pathname === "/cart" || location.pathname === "/wishlist"; 

  return (
    <div className="relative overflow-x-hidden">
      {/* Hide Navbar and Sidebar on Cart and Wishlist pages */}
      {!hideNavbarSidebar && <Sidebar />}
      {!hideNavbarSidebar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/puma" element={<Puma />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
