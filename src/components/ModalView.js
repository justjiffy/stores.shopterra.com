import React, { Component } from 'react'
import Signup               from '../containers/Signup'
import '../styles/Modal.css'
import {
  hideModal
} from '../actions/modal'

export default class ModalView extends Component {
  constructor(props) {
    super(props)
  }

  onDialogueClick(e) {
    e.stopPropogation();
  }

  render() {
    return (
      <div className="Modal">
        <div className="overlay" />
        <div className="content" >
          <span className="button" onClick={this.props.close}>X</span>
          { this.props.scene === "signup" ?
            <Signup pitch="Create Account" type="postLaunch" /> :
            null
          }
        </div>
      </div>
    )
  }
}
