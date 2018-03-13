import React, {Component} from 'react'
import {connect}          from 'react-redux'
import SignupView       from '../components/SignupView'
import {
  graph,
  helloKey,
  inputKey
} from '../actions/request'

class Signup extends Component {
  state = {
    email: ''
  }

  constructor(props) {
    super(props)
    this.updateEmail = this.updateEmail.bind(this)
  }

  updateEmail(email) {
    this.setState({email})
  }

  render() {
    return (
      <SignupView {...this.props}
        email={this.state.email}
        updateEmail={this.updateEmail}
        />
    )
  }
}

function mapStateToProps(state) {
  const apiCall = state.api[helloKey] || {}

  const errorMsg = !apiCall.error ? null :
    apiCall.error.message || JSON.stringify(apiCall.error)

  return {
    loading:  apiCall.loading,
    response: apiCall.body,
    errorMsg,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: (email) => {
      return dispatch(graph('subscriber', `
        mutation createSubscriber($input: SubscriberInput!) {
          ok:addSubscriber(input: $input)
        }
      `, {input: {email}}
      ))
    },
    hello: () => {
      return dispatch(graph(helloKey, `
        {
          hello1 {
            hi
          }
        }
      `))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
