import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <div className="Signup">
        <section>
        { props.submitMsg ?
          <h1>Thanks!</h1>
          :
          <form onSubmit={(e) => {e.preventDefault(); props.submit(props.email) }}>
            <h2>{props.pitch}</h2>
            <input type="email" name="email" value={props.email}
                     onChange={(e) => props.updateEmail(e.target.value)}
                     autoComplete="email" placeholder="E-mail Address"/>
            <button>Notify Me</button>
          </form>
        }
      </section>
    </div>
    )
  }
}
