import React, {Component} from 'react'
import {connect}          from 'react-redux'
import FooterView       from '../components/FooterView'

class Footer extends Component {
  render() {
    return (
      <FooterView {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
