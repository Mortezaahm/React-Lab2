import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">Logo</NavLink>
        <div className="navbar__links">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}> Products </NavLink>
          <NavLink to="/add-product" onClick={closeMenu}>Add Product</NavLink>
        </div>
      </div>



      <button onClick={() => setIsOpen(!isOpen)} className="navbar__toggle">
        ☰ Menu
      </button>

      {isOpen && (
        <div className="navbar__mobile">
          <NavLink to="/"  onClick={closeMenu}>Home</NavLink>
          <NavLink  to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink  to="/add-product" onClick={closeMenu}>Add Product</NavLink>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
