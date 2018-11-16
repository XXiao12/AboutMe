import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './splash.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Splash} />
        </div>
      </Router>
    );
  }
}

export default App;