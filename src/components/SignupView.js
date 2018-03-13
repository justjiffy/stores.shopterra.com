import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <div>
      { props.submitted === true ?
        <h1>Thanks!</h1>
        :
        <form className="Signup" onSubmit={(e) => {e.preventDefault(); props.submit(props.email); props.updateSubmitted(true) }}>
          <label>
            E-mail Address
            <input type="email" name="email" value={props.email}
                   onChange={(e) => props.updateEmail(e.target.value)}
                   autoComplete="email" placeholder="E-mail Address"/>
          </label>
          <button>Submit</button>
        </form>
      }
      </div>
    )
  }
}
