import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Nav/Header";
import AboutMe from "./components/Main/AboutMe";
import Skills from "./components/Main/Skills";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/Main/ContactMe";

// https://coolors.co/ffc857-e9724c-c5283d-481d24-255f85
class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <AboutMe />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
