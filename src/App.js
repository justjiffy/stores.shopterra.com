import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { baseUrl } from './services/api';

class App extends Component {
  componentDidMount() {
    fetch(baseUrl+"graph", {
      method: "post",
      headers: {"Content-Type":"application/json",
                "Accept": 'application/json'
      },
      body: JSON.stringify({ query: `
        {
          hello {
            hi
          }
        }
        `})
     })
     .then(body => body.json())
     .then(body => console.log(body));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Shopterra" />
        </header>
        <p className="App-intro">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RE5HOvtNHWQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
        </p>
      </div>
    );
  }
}

export default App;
