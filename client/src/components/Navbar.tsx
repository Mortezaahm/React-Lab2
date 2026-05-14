// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Logo</Link>

      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>

      {/* Hamburger menu for mobile
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-2 p-4 md:hidden">
          <Link to="#">Home</Link>
          <Link to="#">Products</Link>
          <Link to="#">Add Product</Link>
        </div>
      )}
        */}
    </nav>
  );
};

export default Navbar;
