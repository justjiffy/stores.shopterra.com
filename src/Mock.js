import React, { Component } from 'react';
import './App.css';

export const stores = [
  {
    name: "John's Natural",
    userID: 0
  },
  {
    name: "VeggieScrubbers",
    userID: 1
  }
]

export const users = [
  {
    id: 0,
    email: "info@johnsnatural.com",
    password: "test123"
  },
  {
    id: 1,
    email: "info@veggiescrubbers.com",
    password: "test321"
  }
]

export function showLogin(event) {
  this.setState({showForm: true})
}

export function handleSubmit(event) {
  event.preventDefault();
  //   fetch(baseUrl+"/graphiql", {
  //     method: "post",
  //     headers: {
  //       "Content-Type":"application/json",
  //       "Accept": 'application/json'
  //     },
  //     body: JSON.stringify({ query: `
  //       {
            // user {
            //   login
            //   password
            // }
  //       }
  //     `})
  //    })
  //    .then(res => res.json())
  //    .then(data => { ...
  const u = users.find(usr => usr.email == this.state.login)
  return new Promise((resolve, reject) => {
    if(u === undefined) {
      return resolve("Login/Email not found")
    } else if(u.password === this.state.password) {
      const s = stores.find(str => str.userID == u.id)
      this.setState({
        showForm: false,
        loggedIn: true,
        shop: s.name
      })
      return resolve()
    } else {
      return resolve("Password is not correct")
    }
  }, err => {
    console.log('error: ', err)
  })
}

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      showForm: false,
      login: "",
      password: "",
      shop: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = handleSubmit.bind(this)
  }

  handleChange(event, data) {
    event.target.id == "login" ?
      this.setState({ login: event.target.value }) :
      this.setState({ password: event.target.value })
  }

  render() {
    return (
      <div className="store-login">
        { this.state.loggedIn ?
          <h3>{this.state.shop}</h3> :
            <form onSubmit={this.handleSubmit}>
              <label>Login: </label>
              <input type="text" id="login" value={this.state.login} onChange={this.handleChange} />
              <label> Password: </label>
              <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
              <input type="submit" value="submit" />
            </form>
        }
      </div>
    );
  }
}
