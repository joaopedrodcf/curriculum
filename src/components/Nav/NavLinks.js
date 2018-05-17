import { NavLink } from 'react-router-dom';
import React from 'react';

const NavLinks = ({ props }) => (
  <nav className={`nav-links ${props}`}>
    <NavLink activeClassName="nav-links-active" exact to="/">
      About me
    </NavLink>
    <NavLink activeClassName="nav-links-active" exact to="/skills">
      Skills
    </NavLink>
    <NavLink activeClassName="nav-links-active" exact to="/projects">
      Projects
    </NavLink>
    <NavLink activeClassName="nav-links-active" exact to="/contactme">
      Contact me
    </NavLink>
  </nav>
);

export default NavLinks;
