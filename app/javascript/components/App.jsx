import React, { Component } from 'react';
import Menu from './Menu';
import Routes from './Routes';
import configureStore from '../configureStore';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom'

const store = configureStore;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="container">
              <Menu />
              <Routes />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;