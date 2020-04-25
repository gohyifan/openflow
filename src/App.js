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
import Banner from './components/contributeBanner';
import Trending from './components/trending';

function App() {
  // initialize state of showLoginOverlay as false to hide it
  


  return (
    <Router>
    <div className="App">
      <div class="navbar">
        NAV
      </div>
      <div className="sideview">
        SIDE VIEW
      </div>
      <div className="body-wrapper">
          <Banner
          verified={true}
          />
      </div>
      <Nav />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchResult} />
        <Route path="/datasets/:title" component={ Dataset } />
      </Switch>
    </div>

    </Router>
  );
}

export default App