import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import animation from './animation.js';
import './App.css';
// import {users} from './services/db'

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className="splash-form">
      <label className="splash-label">Email:
        <input type="text" id="email" value={props.email} autoComplete="email" className="splash-input"/>
      </label>
      <button type="submit" value="submit" className="splash-submit">SUBMIT</button>
    </form>
  )
}

export class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      submitted: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    //make request to the API, submit data
    this.setState({
      submitted: true
    })
  }

  componentWillEnter(cb) {
    console.log('componentWillEnter:', this);
  }

  render() {
    return (
      <TransitionGroup>
        <div className="splash-container">
          { this.state.submitted ?
            <h1>Thanks!</h1> :
              <Form />
            }
        </div>
      </TransitionGroup>
    );
  }
}
