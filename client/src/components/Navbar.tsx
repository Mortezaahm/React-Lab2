import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">Logo</NavLink>

        {/* Desktop Links */}
        <div className="navbar__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products"> Products </NavLink>
          <NavLink to="/add-product">Add Product</NavLink>
        </div>

        {/* Mobile Links */}
        <button onClick={() => setIsOpen(!isOpen)} className="navbar__toggle">
          ☰ Menu
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${isOpen ? 'open' : ''}`}>
          <NavLink to="/"  onClick={closeMenu}>Home</NavLink>
          <NavLink  to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink  to="/add-product" onClick={closeMenu}>Add Product</NavLink>
      </div>
      {isOpen && (
        <div className="navbar__overlay" onClick={closeMenu}></div>
      )}

    </nav>
  );
};

export default Navbar;
