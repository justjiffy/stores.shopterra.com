import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import logo                 from '../images/shopterra_logo.png'
import '../styles/Header.css'

export default class HeaderView extends Component {
  state = {
    showNav: false
  }

  updateDimensions() {
    if (window.innerWidth > 769) {this.setState({showNav: true})}
    else this.setState({showNav: false})
  }

  openNav(e) {
    e.preventDefault();
    alert('open sesame!');
    this.setState({showNav: true})
  }

  componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className="Header">
        <Link to="/">
          <img className="logo" src={logo} alt="shopterra_logo" />
        </Link>
        <Hamburger event={this.openNav} />
        <Menu showNav={this.state.showNav} />
      </div>
    )
  }
}

class Hamburger extends Component {
  render() {
    return(
      <svg onClick={this.props.event.bind(this)} className="mobile" version="1.1" viewBox="0 0 27 20" xmlns="http://www.w3.org/2000/svg">
        <desc>Created with Sketch.</desc>
        <g fill="none" fillRule="evenodd">
        <g transform="translate(-293 -20)" fill="#9A9A9A">
        <rect x="293" y="20" width="30" height="2" rx="1"/>
        <rect x="293" y="29" width="30" height="2" rx="1"/>
        <rect x="293" y="38" width="30" height="2" rx="1"/>
        </g>
        </g>
      </svg>
    )
  }
}

class Menu extends Component {
  render() {
    return(
      <div>
        { this.props.showNav ?
          <ul>
            <li>Rating System</li>
            <li>About</li>
            <li>Blog</li>
            <li>Sign In</li>
            <li>Start Selling</li>
          </ul>
          : null
        }
      </div>
    )
  }
}
