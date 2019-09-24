import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu';
import Routes from './Routes';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Menu />
            <Home />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;