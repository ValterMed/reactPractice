import React, { Component } from 'react';
import Menu from './Menu';
import Routes from './Routes';
import configureStore from '../store/store';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import {loadArticles} from '../actions/loadArticles'

const store = configureStore();
store.dispatch(loadArticles());

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