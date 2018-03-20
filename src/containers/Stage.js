import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Header             from '../containers/Header'
import Footer             from '../containers/Footer'
import About              from '../containers/About'

class Stage extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
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
