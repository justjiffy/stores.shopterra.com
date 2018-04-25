import React, {Component} from 'react'
import {connect}          from 'react-redux'
import { withRouter }     from 'react-router-dom'
import HeaderView         from '../components/HeaderView'

class Header extends Component {
  render() {
    return (
      <HeaderView {...this.props} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
