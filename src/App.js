import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Splash from './containers/Splash/splash';
import importfacts from './facts';
import portfolio from './containers/Home/home';
import about from './containers/About';
import error from './components/404';
import process from './containers/Portfolio/Process';
import cst from './containers/Portfolio/CST';
import myPlants from './containers/Portfolio/MyPlants';


const demoAsyncCall = () => {
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
    // this.resetScroll = this.resetScroll.bind(this);
  }

  componentDidMount() {
    demoAsyncCall()
      .then(() => this.setState({ loading: false }))
  }

  handleRemove(i) {
    if (i === 0) {
      this.setState({ facts: importfacts });
    }
    else {
      let newFacts = this.state.facts.slice();
      newFacts.splice(i, 1);
      this.setState({ facts: newFacts })
    }
  }

  // resetScroll() {
  //   window.scrollTo(0, 0);
  // }

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
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/portfolio" component={portfolio} />
            <Route path="/about" component={about} />
            <Route path="/process" component={process} />
            <Route path="/colliding_scopes_theatre" component={cst} />
            <Route path="/my_plants" component={myPlants} />
            <Route component={error} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;