import React from "react";

import Header from "./components/Nav/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default class Routes extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
