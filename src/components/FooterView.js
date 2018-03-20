import React, { Component } from 'react'
import logo                 from '../images/shopterra_logo.png'
import instagram                 from '../images/social_instagram.png'
import facebook                 from '../images/social_facebook.png'
import '../styles/App.css'

export default class FooterView extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={instagram} className="social" alt="instagram" />
        <img src={facebook} className="social" alt="facebook" />
        <div>
          <img src={logo} className="logo" alt="logo" />
          <p>Shopterra Inc. &copy; 2018</p>
          <a href="mailto:info@shopterra.com">info@shopterra.com</a>
        </div>
      </div>
    )
  }
}
