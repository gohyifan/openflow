import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult';
import Dataset from './components/Dataset';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // initialize state of showLoginOverlay as false to hide it
  return (
    <Router>
      <Nav />
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <Sidebar/>
        </div>
        <div style={{ width: "80%" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={SearchResult} />
            <Route path="/datasets/:title" component={ Dataset } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
