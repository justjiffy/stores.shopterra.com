import React, { Component } from 'react'
import logo                 from '../images/shopterra_logo.png'
import '../styles/Header.css'

export default class HeaderView extends Component {
  render() {
    return (
      <div className="Header">
        <img className="logo" src={logo} alt="shopterra_logo" />
      </div>
    )
  }
}
