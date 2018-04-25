import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <div>
      { props.type === "preLaunch" ?
        <PreLaunch {...this.props} />
        :
        <PostLaunch {...this.props} />
      }
      </div>
    )
  }
}

class PreLaunch extends Component {
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
            <form onSubmit={(e) => {e.preventDefault(); props.submitPre(props.element) }}>
              <input type="email" name="email" value={props.element.email}
                     onChange={(e) => props.updateElement(e.target.name, e.target.value)}
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

class PostLaunch extends Component {

  render() {
    const {props} = this

    return (
      <div className="Signup Create">
        <section>
        { props.submitMsg ?
          <div>
            <h2>Your account has been created</h2>
            <button className="button">Log In</button>
          </div>
          :
          <div>
            <h2>{props.pitch}</h2>
            <p>Create your login details so we can save your progress</p>
            <form onSubmit={(e) => {e.preventDefault(); props.submitPost(props.element)}}>
              <input type="email" name="email" value={props.element.email}
                     onChange={(e) => props.updateElement(e.target.name, e.target.value)}
                     autoComplete="email" placeholder="email address"/>
              <input type="password" name="password" value={props.element.password}
               onChange={(e) => props.updateElement(e.target.name, e.target.value)}
               autoComplete="password" placeholder="password"/>
             <div>
               <input required type="checkbox"></input>
               <p>I Agree to the following <a href="#">Terms of Service</a> and <a href="#">Privacy Agreement</a></p>
             </div>
              <button>Register Account</button>
            </form>
          </div>
        }
        </section>
      </div>
    )
  }
}
