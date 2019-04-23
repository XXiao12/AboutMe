import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import importfacts from './facts';
import portfolio from './containers/Home/home';
import about from './containers/About';
import error from './components/404';


const demoAsyncCall=() => {
  return new Promise((resolve) => setTimeout(() => resolve(), 1500));
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
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={portfolio} />
            <Route exact path="/about" component={about} />
            <Route component={error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;