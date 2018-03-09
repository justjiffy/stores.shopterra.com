import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <form className="Signup" onSubmit={(e) => {e.preventDefault(); props.submit()}}>
        <label>
          E-mail Address
          <input type="email" name="email" value={props.email}
                 autoComplete="email" placeholder="E-mail Address"/>
        </label>
        <button>Submit</button>

        <a className="killme" onClick={props.hello}>Hello World</a>
      </form>
    )
  }
}
