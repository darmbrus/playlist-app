import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Main">
          <NavBar />
          <Content data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
