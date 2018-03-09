import React, { Component } from 'react'
import '../styles/Signup.css'

export default class SignupView extends Component {
  render() {
    const {props} = this

    return (
      <form className="Signup" onSubmit={(e) => {e.preventDefault(); props.submit(props.email)}}>
        <label>
          E-mail Address
          <input type="email" name="email" value={props.email}
                 onChange={(e) => props.updateEmail(e.target.value)}
                 autoComplete="email" placeholder="E-mail Address"/>
        </label>
        <button>Submit</button>

        <div className="killme">
          <a onClick={props.hello}>Hello World</a>

          { props.response &&
            <div>{JSON.stringify(props.response)}</div>
          }
          { props.loading &&
            <div>Loading...</div>
          }
          { props.errorMsg &&
            <div style={{color: 'indianred'}}>
              {props.errorMsg}
            </div>
          }
        </div>
      </form>
    )
  }
}
