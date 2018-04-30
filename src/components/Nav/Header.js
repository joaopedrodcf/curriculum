import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header-site">
    <div className="header-logo">
      <img className="logo" src="my_first_logo.png" alt="about-me-img" />
    </div>
    <nav>
      <div className="nav-links">
        <NavLink activeClassName="nav-links-active" exact to="/">
          <p>About me</p>
        </NavLink>
        <NavLink activeClassName="nav-links-active" exact to="/skills">
          <p>Skills</p>
        </NavLink>
        <NavLink activeClassName="nav-links-active" exact to="/projects">
          <p>Projects</p>
        </NavLink>
        <NavLink activeClassName="nav-links-active" exact to="/contactme">
          <p>Contact me</p>
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
