import React from 'react';
import { NavLink } from 'react-router-dom';

// https://coolors.co/ffc857-e9724c-c5283d-481d24-255f85
const Header = () => (
  <header className="header-site">
    <div className="header-logo">
      <img className="logo" src="my_first_logo.png" alt="about-me-img" />
    </div>
    <nav>
      <div className="nav-links">
        <NavLink exact to="/">
          <p>About me</p>
        </NavLink>
        <NavLink exact to="/skills">
          <p>Skills</p>
        </NavLink>
        <NavLink exact to="/projects">
          <p>Projects</p>
        </NavLink>
        <NavLink exact to="/contactme">
          <p>Contact me</p>
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
