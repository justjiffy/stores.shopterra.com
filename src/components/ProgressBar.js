import React, { Component } from 'react'
import '../styles/ProgressBar.css'

const CheckIcon = () => <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 48 32"><title>icon_check</title><path fill="#707070" d="M47.513-2.692c-0.65-0.677-1.705-0.678-2.356-0.003l-29.486 30.563-12.829-13.297c-0.651-0.675-1.706-0.674-2.356 0.003s-0.649 1.771 0.002 2.446l13.963 14.472c0.325 0.337 0.751 0.505 1.177 0.505 0.011 0 0.021-0.003 0.032-0.003 0.017 0 0.034 0.005 0.052 0.005 0.426 0 0.851-0.168 1.177-0.505l30.622-31.74c0.651-0.675 0.652-1.77 0.002-2.446z"></path></svg>

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ProgressBar">
        <Section class={this.props.registration.step1} />
        <hr />
        <Section class={this.props.registration.step2} />
        <hr />
        <Section class={this.props.registration.step3} />
      </div>
    )
  }
}

class Section extends Component {
  render() {
    return(
      <section className={this.props.class}>
        <span><CheckIcon /></span>
      </section>
    )
  }
}
