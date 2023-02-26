import React, { Component } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <section className="main-container">
        <Header />
        <Body />
        <Footer />
      </section>
    );
  }
}

export default App;
