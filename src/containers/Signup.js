import React, {Component} from 'react'
import {connect}          from 'react-redux'
import SignupView         from '../components/SignupView'
import {
  graph,
  subscriberKey
} from '../actions/request'


class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props)
    this.updateElement = this.updateElement.bind(this)
  }

  updateElement(name, value) {
    this.setState({[name]: value})
  }

  render() {
    return (
      <SignupView {...this.props}
        element={this.state}
        updateElement={this.updateElement}
      />
    )
  }
}

function mapStateToProps(state) {
  const apiCall = state.api[subscriberKey] || {}

  const errorMsg = !apiCall.error ? null :
    apiCall.error.message || JSON.stringify(apiCall.error)

  const submitMsg = !apiCall.body ? null : apiCall.body.ok;

  return {
    loading:  apiCall.loading,
    response: apiCall.body,
    submitMsg,
    errorMsg,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitPre: (element) => {
      const email = element.email;
      return dispatch(graph(subscriberKey, `
        mutation createSubscriber($input: SubscriberInput!) {
          ok:addSubscriber(input: $input)
        }
      `, {input: {email}}
      ))
    },
    submitPost: (element) => {
      const email = element.email;
      const password = element.password;
      return console.log("submitPost called, ", email, password);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
