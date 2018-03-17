import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Signup             from '../containers/Signup'
import Header             from '../components/Header'
import Footer             from '../components/Footer'
import About              from '../components/About'

class Stage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Signup pitch="Get notified when we launch" />
        <About />
        <Signup pitch="Be the first to sell on Shopterra" />
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
