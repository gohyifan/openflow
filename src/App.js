import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult'
import Dataset from './components/Dataset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App">
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

export default App;
