import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult'
import Dataset from './components/Dataset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dialog } from 'evergreen-ui';


// import custom components
import New from './components/New';

function App() {
  // initialize state of showLoginOverlay as false to hide it
  return (
    <Router>
      <Nav />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchResult} />
        <Route path="/datasets/:title" component={ Dataset } />
      </Switch>
    </Router>
  );
}

export default App
