import React, { Component } from 'react'
import logo                 from '../images/shopterra_logo.png'
import '../styles/App.css'

export default class Header extends Component {
  render() {
    const {props} = this

    return (
      <div className="Header">
        <img className="logo" src={logo} alt="shopterra_logo" />
      </div>
    )
  }
}
