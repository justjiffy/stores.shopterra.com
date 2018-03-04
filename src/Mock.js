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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, data) {
    event.target.id == "login" ?
      this.setState({ login: event.target.value }) :
      this.setState({ password: event.target.value })
  }

  showLogin(event) {
    this.setState({showForm: true})
  }

  handleSubmit(event) {
    event.preventDefault();
    //  LOOK THROUGH USERS, if user match is found, check password, if password matches, log in
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
    users.map((user) => {
      console.log(user.email, this.state.login);
      if(user.email === this.state.login)
        this.setState({
          showForm: false,
          loggedIn: true
        })
    });
  }

  render() {
    return (
      <div className="store-login">
        { this.state.showForm ?
          <form onSubmit={this.handleSubmit}>
            <label>Login: </label>
            <input type="text" id="login" value={this.state.login} onChange={this.handleChange} />
            <label> Password: </label>
            <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
            <input type="submit" value="submit" />
          </form> :
          <button onClick={this.showLogin}>Store Login</button>
        }
        { this.state.loggedIn ?
          <h3>Logged In!</h3> :
          <h3></h3>
        }
      </div>
    );
  }
}
