import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Committee from './pages/Committee';
import Home from './pages/Home'
import Project from './pages/Project';
import Talk from './pages/Talk';
import Workshop from './pages/Workshop';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#75b49e' },
    secondary: { main: '#2b7a78' },
  },
  typography: { fontFamily: '"Titillium Web", sans-serif' },
})

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/workshop" component={Workshop} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/talk" component={Talk} />
          <Route exact path="/committee" component={Committee} />
          <Footer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
