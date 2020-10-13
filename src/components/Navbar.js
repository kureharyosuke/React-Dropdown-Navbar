import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { FaPlug, FaTimes, FaStream, FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Dropdown
          <FaPlug />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaStream />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
              <FaCaretDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-modbile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
