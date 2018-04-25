import React, {Component} from 'react'
import {connect}          from 'react-redux'
import ModalView          from '../components/ModalView'
import {
  hideModal
} from '../actions/modal'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ModalView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    scene: state.modal.scene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => {
      dispatch({
        type: 'modal:hide'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
