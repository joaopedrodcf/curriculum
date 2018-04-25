import React from "react";

// https://coolors.co/ffc857-e9724c-c5283d-481d24-255f85
export default class Header extends React.Component {
  render() {
    return (
      <header className="header-site">
        <div className="header-logo">
          <img className="logo" src="my_first_logo.png" alt="about-me-img" />
        </div>
        <nav>
          <div className="nav-links">
            <a>
              <p>About me</p>
            </a>
            <a>
              <p>Skills</p>
            </a>

            <a>
              <p>Projects</p>
            </a>

            <a>
              <p>Contact me</p>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
