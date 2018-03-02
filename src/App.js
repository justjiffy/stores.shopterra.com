import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { baseUrl } from './services/api';
import { Login } from './Mock.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this)
  }
  fetchProducts() {
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
       this.setState({products})
       return products
     });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Shopterra" />
        </header>
        <p className="App-intro">
          <iframe title="Shopterra" width="560" height="315" src="https://www.youtube.com/embed/RE5HOvtNHWQ?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen=""></iframe>
        </p>
        <Login />
        <div className="product-list">
        { !this.state.products.length ?
          <button onClick={this.fetchProducts}>Fetch Products</button> :
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
