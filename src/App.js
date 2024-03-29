import React, { Component } from 'react';
import { Provider }         from 'react-redux'
import Stage                from './containers/Stage'
import store                from './reducers'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Stage />
        </div>
      </Provider>
    );
  }
}

export default App;
