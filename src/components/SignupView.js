import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <div className="Signup">
        <section>
        { props.submitMsg ?
          <h1 className="confirmation">Thanks!</h1>
          :
          <div>
            <h2>{props.pitch}</h2>
            <form onSubmit={(e) => {e.preventDefault(); props.submit(props.email) }}>
              <input type="email" name="email" value={props.email}
                     onChange={(e) => props.updateEmail(e.target.value)}
                     autoComplete="email" placeholder="enter your email"/>
              <button>Notify Me</button>
            </form>
          </div>
        }
      </section>
    </div>
    )
  }
}
