import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Signup             from '../containers/Signup'
import Header             from '../components/Header'
import Footer             from '../components/Footer'

class Stage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Signup />
        <Footer />
      </div>
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
