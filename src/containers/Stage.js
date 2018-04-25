import React, {Component} from 'react'
import {connect}          from 'react-redux'
import { Switch, Route, withRouter }  from 'react-router-dom'

import Header             from '../containers/Header'
import Footer             from '../containers/Footer'
import About              from '../containers/About'
import Registration       from '../containers/Registration'
import Modal              from '../containers/Modal'

class Stage extends Component {
  componentDidMount() {
    setTimeout(this.props.showSignupModal, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/" component={About} />
        </Switch>
        <Footer />
        { this.props.modal.show ?
          <Modal /> : null }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showSignupModal: () => {
      dispatch({
        type: 'modal:show',
        scene: 'signup',
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stage))
