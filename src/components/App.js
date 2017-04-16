import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
// import Content from '../containers/Content.js';
import Footer from './Footer.js';
import PlaylistList from '../containers/playlist-list.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Main">
          <NavBar />
          <PlaylistList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
