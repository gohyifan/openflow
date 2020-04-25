import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult'
import Dataset from './components/Dataset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Pane } from 'evergreen-ui';

function App() {
  // initialize state of showLoginOverlay as false to hide it
  return (
    <Router>
      <Nav />
      <Pane display="flex">
        <Pane width="20%">
          <Sidebar/>
        </Pane>
        <Pane width="80%">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={SearchResult} />
            <Route path="/datasets/:title" component={ Dataset } />
          </Switch>
        </Pane>
      </Pane>
    </Router>
  );
}

export default App;
