import React, { Component } from 'react';
import './App.css';
import {vendors, users} from './services/db'


export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      showForm: false,
      login: "",
      password: "",
      vendor: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
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
    const u = users.find(usr => usr.email === this.state.login)
    return new Promise((resolve, reject) => {
      if(u === undefined) {
        return resolve("Login/Email not found")
      } else if(u.password === this.state.password) {
        return resolve(this.props.login(u))
      } else {
        return resolve("Password is not correct")
      }
    })
  }

  render() {
    return (
      <div className="store-login">
        { this.state.loggedIn ?
          <h3>{this.state.vendor.name}</h3> :
            <form onSubmit={this.handleSubmit}>
              <label>Login:
                <input type="text" id="login" value={this.state.login} onChange={this.handleChange} />
              </label>
              <label>Password:
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
              </label>
              <button type="submit" value="submit">SUBMIT</button>
            </form>
        }
      </div>
    );
  }
}
