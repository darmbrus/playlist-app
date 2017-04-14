import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Main">
          <NavBar />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
