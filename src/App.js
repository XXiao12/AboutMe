import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import importfacts from './facts';
import Splash from './containers/Splash/splash';
import Home from './containers/Home/home'

const demoAsyncCall=() => {
  return new Promise((resolve) => setTimeout(() => resolve(), 35000000));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      facts: importfacts
    }
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    demoAsyncCall()
      .then(() => this.setState({loading:false}))
  }

  handleRemove(i) {
    if (i === 0) {
      this.setState({facts: importfacts});
    }
    else {
      let newFacts = this.state.facts.slice();
      newFacts.splice(i, 1);
      this.setState({facts: newFacts})
    }
  }

  render() {
    const {
      loading,
      facts
    } = this.state;

    if (loading) {
      return <div className="loading">
                <Loader
                  type="Grid"
                  color="#00BFFF"
                  height="80"
                  width="80"
                />
                {
                  facts.map((fact, i) => 
                    <div key={i} className="info" onClick={() => this.handleRemove(i)}>
                      <h2>{fact}</h2>
                      <p>[click white box to see more facts about me]</p>
                    </div>)
                }
              </div>
    }
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