import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Signup             from '../containers/Signup'

class Stage extends Component {
  render() {
    return (
      <Signup />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage)
