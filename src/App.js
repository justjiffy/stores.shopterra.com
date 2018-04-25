import React, { Component } from 'react'
import { Provider }         from 'react-redux'
import { BrowserRouter }  from 'react-router-dom'
import store                from './reducers'
import Stage                from './containers/Stage'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Stage />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
