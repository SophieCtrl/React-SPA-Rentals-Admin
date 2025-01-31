import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ onShowAll }) {
  const handleShowAll = () => {
    onShowAll();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" onClick={handleShowAll}>
            <img className="logo" src={logo} alt="rentHub Logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">More</NavLink>
        </li>
      </ul>
    </nav>
  );
}
