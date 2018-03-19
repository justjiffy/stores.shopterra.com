import React, { Component } from 'react'
import logo                 from '../images/shopterra_logo.png'
import '../styles/App.css'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="logo" src={logo} alt="shopterra_logo" />
        <h1>A Marketplace For Natural Products.</h1>
        <h2>Let us help you tell your story.</h2>
        <h3>Sell your product to customers that care about how it impacts them and the environment.</h3>
      </div>
    )
  }
}
