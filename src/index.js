import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// https://coolors.co/ffc857-e9724c-c5283d-481d24-255f85
class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <header className="header-site">
          <div className="header-logo">
            <img className="logo" src="my_first_logo.png" alt="about-me-img" />
          </div>
          <nav>
            <div className="nav-links">
              <a href="">
                <p>About me</p>
              </a>

              <a href="">
                <p>Skills</p>
              </a>

              <a href="">
                <p>Projects</p>
              </a>

              <a href="">
                <p>Contact me</p>
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="section-about-me">
            <figure>
              <img src="https://placehold.it/250x250" alt="about-me-img" />
              <figcaption>Web developer</figcaption>
            </figure>
            <article>
              <h1>About me</h1>
              <p>
                Since I can remember, I've always loved computers and
                technology, and that was the spark I needed to begin studying
                computer science.
              </p>

              <p>
                Got my bachelor's degree in computer science in 2017, and during
                those years learned so much about Java , C , Javascript and PHP.
              </p>

              <p>
                After graduating been working at TIMWE where I'm a software
                developer, in so little time learned so much and gained lots of
                resposabiltys. I can highlight the build of new Rest Apis in
                Java with JAX-RS, the knowledge of Linux machines, and the giant
                Maven dependencys Management.
              </p>

              <p>
                As today I'm working in APPBOX product, an Android APP. I'm one
                of the backend developers of the project and been creating new
                Webapps, creating new databases for the Oracle Sql part of the
                app and even been using Elastic Search.
              </p>

              <p>
                My interst are the development of websites , apps for android,
                and open source software. As so I have been improving my Github
                page with little Demo projects that can show my skills and help
                the community.
              </p>

              <p>
                My most recent project is a Demo of a Blog, that contains a CMS
                part to create new information for the site. Frontend used :
                React , Bootstrap , Css , html Backend: Spring , Java , Postgres
                You can access the website here , it was deploy in heroku:
                <a href="https://fierce-beach-47814.herokuapp.com/">
                  blog demo
                </a>
              </p>

              <p>
                I'm always trying to improve myself and I'm always open to new
                opportunities so feel free to contact me!
              </p>
            </article>
          </section>

          <section className="section-skills" />
        </main>

        <footer>
          <div>
            <i className="fab fa-github" />
            <a href="https://github.com/joaopedrodcf">Github page</a>
          </div>

          <div>
            <i className="fab fa-linkedin" />
            <a href="https://www.linkedin.com/in/joaoferr93/">Linkedin page</a>
          </div>
        </footer>
      </div>
    );
  }
}

/*
 <aside className="aside-right">
          <ul>
            <li>
              <a href="">Backend </a>
              <ul>
                <li>
                  <a href="">Java</a>
                </li>
                <li>
                  <a href="">Spring</a>
                </li>
                <li>
                  <a href="">Hibernate</a>
                </li>
                <li>
                  <a href="">JPA</a>
                </li>
                <li>
                  <a href="">PHP</a>
                </li>
                <li>
                  <a href="">Codeigniter</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Front end </a>
              <ul>
                <li>
                  <a href="">Bootstrap</a>
                </li>
                <li>
                  <a href="">HTML and CSS</a>
                </li>
                <li>
                  <a href="">Javascript</a>
                </li>
                <li>
                  <a href="">Javascript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Database</a>
              <ul>
                <li>
                  <a href="">Oracle sql</a>
                </li>
                <li>
                  <a href="">Mysql</a>
                </li>
                <li>
                  <a href="">Elastic search</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        */

ReactDOM.render(<App />, document.getElementById("root"));
