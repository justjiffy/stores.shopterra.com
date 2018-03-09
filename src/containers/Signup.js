import React, {Component} from 'react'
import {connect}          from 'react-redux'
import SignupView       from '../components/SignupView'

class Signup extends Component {
  render() {
    return (
      <SignupView {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
