import React, { Component } from 'react';
import './App.css';

export const stores = [
  {
    name: "John's Natural",
    user: 0
  },
  {
    name: "VeggieScrubbers",
    users: 1
  }
]

export const users = [
  {
    email: "info@johnsnatural.com",
    password: "test123"
  },
  {
    email: "info@veggiescrubbers.com",
    password: "test321"
  }
]
export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      showForm: false,
      login:"",
      password:"",
      shop: ""
    }
    this.showLogin = this.showLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, data) {
    event.target.id == "login" ?
      this.setState({ login: event.target.value }) :
      this.setState({ password: event.target.value })
  }
  showLogin() {
    this.setState({showForm: true})
  }

  submitLogin() {
    //submit form
    //if credentials pass => loadProducts()
    //else error
  }

  // fetchProducts() {
  //   fetch(baseUrl+"/graphiql", {
  //     method: "post",
  //     headers: {
  //       "Content-Type":"application/json",
  //       "Accept": 'application/json'
  //     },
  //     body: JSON.stringify({ query: `
  //       {
  //         products {
  //           title
  //           images
  //           vendor
  //         }
  //       }
  //     `})
  //    })
  //    .then(res => res.json())
  //    .then(data => {
  //      const products = data.data.products
  //      this.setState({products})
  //      return products
  //    });
  // }
  render() {
    return (
      <div className="store-login">
        { this.state.showForm ?
          <form>
            <label>Login: </label>
            <input type="text" id="login" value={this.state.login} onChange={this.handleChange} />
            <label> Password: </label>
            <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
            <input type="submit" value="submit" />
          </form> :
          <button onClick={this.showLogin}>Store Login</button>
        }
      </div>
    );
  }
}
