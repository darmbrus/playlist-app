import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Main">
          <NavBar />
          <div className="Content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
