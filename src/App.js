import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'

import NavBar from './components/NavBar';
import Project from './pages/Project';
import Workshop from './pages/Workshop';
import Talk from './pages/Talk';
import Committee from './pages/Committee';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
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
