import React, {Component} from 'react'
import {connect}          from 'react-redux'
import HeaderView       from '../components/HeaderView'

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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
