import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './splash.js';
import Home from './containers/home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;