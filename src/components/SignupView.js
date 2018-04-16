import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <div className="Signup">
        <section>
        { props.submitMsg ?
          <p className="confirmation">{"Thank you for your interest in being a Seller on Shopterra. We cherish your partnership. Our goal is to promote awareness of your wonderful products to a wider audience, while  increasing your sales. A representative will contact you by e-mail within 7 days to understand your selling needs"}</p>
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
