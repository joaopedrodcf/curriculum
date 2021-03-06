import React from 'react';
import NavLinks from './NavLinks';

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
        <NavLinks props={this.state.toogle ? 'responsive' : ''} />
      </header>
    );
  }
}
