import React, {Component} from 'react'
import {connect}          from 'react-redux'
import RegistrationView   from '../components/RegistrationView'
import ProgressBar        from '../components/ProgressBar'
import {
  step1Complete,
  step2Complete,
  step3Complete
} from '../actions/registration'

class Registration extends Component {
  render() {
    return (
      <div>
        <ProgressBar {...this.props} />
        <RegistrationView {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    registration: state.registration
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showFillShop: () => {
      dispatch({
        type: 'progress:step1',
        scene: 'fillShop',
      })
    },
    showAddProduct: () => {
      dispatch({
        type: 'progress:step1',
        scene: 'addProduct'
      })
    },
    submit: (element) => {
      console.log('dispatch: ', element);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
