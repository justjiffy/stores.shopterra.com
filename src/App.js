import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { baseUrl } from './services/api';
import { Login } from './Mock.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      products: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this)
  }
  fetchProducts = (shop) => {
    fetch(baseUrl+"/graph", {
      method: "post",
      headers: {
        "Content-Type":"application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({ query: `
        {
          products {
            title
            images
          }
        }
      `})
     })
     .then(res => res.json())
     .then(data => {
       const products = data.data.products
       //check to make sure vendors match, if so, load products... 
       this.setState({products})
       return products
     })
     .then(this.setState({loggedIn: true}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Shopterra" />
        </header>
        <div className="product-list">
        { !this.state.loggedIn ?
          <Login fetchProducts={this.fetchProducts} /> :
          this.state.products.map((p,i) => {
            return(
              <div key={i}>
                <h2>{p.title}</h2>
                <div>
                {
                  p.images.map((url, idx) => {
                    return(
                      <img key={idx} alt={`${p.title} ${idx}`} style={{width: '200px', height: 'auto'}} src={url} />
                    )
                  })
                }
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
