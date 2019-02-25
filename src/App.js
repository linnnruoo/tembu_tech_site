import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Committee from './pages/Committee';
import Home from './pages/Home'
import Project from './pages/Project';
import Talk from './pages/Talk';
import Workshop from './pages/Workshop';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/workshop" component={Workshop} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/talk" component={Talk} />
          <Route exact path="/committee" component={Committee} />
        </div>
      </Router>
    );
  }
}

export default App;
