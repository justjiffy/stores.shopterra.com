import React, {Component} from 'react'
import {connect}          from 'react-redux'
import AboutView          from '../components/AboutView'

class About extends Component {
  render() {
    return (
      <AboutView {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
