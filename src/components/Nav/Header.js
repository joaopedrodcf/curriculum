import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toogle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({ toogle: !this.state.toogle });
  }

  render() {
    return (
      <header className="header-site">
        <div className="header-logo-toogle">
          <div className="header-logo">
            <img className="logo" src="my_first_logo.png" alt="about-me-img" />
          </div>
          <button onClick={this.handleClick}>
            <i className="fas fa-bars fa-2x" />
          </button>
        </div>

        <MediaQuery maxWidth={500}>
          <nav className={this.state.toogle ? 'nav-links display-show' : 'display-none'}>
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
        </MediaQuery>

        <MediaQuery minWidth={500}>
          <nav className="nav-links">
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
        </MediaQuery>
      </header>
    );
  }
}
