import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" width="250px" />
          <h1 className="App-title">Shopterra</h1>
        </header>
        <p className="App-intro">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RE5HOvtNHWQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
        </p>
      </div>
    );
  }
}

export default App;
