import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/planet.png';

// import css file here
import '../style/navbar.css';

const Navbar = () => (
  <nav className="nav-container">
    <NavLink to="/" className="logo-link">
      <img className="web-logo" src={logo} alt="planet logo" />
      Space Traveler&lsquo;sHub
    </NavLink>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Rocket
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mission">
          Mission
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;