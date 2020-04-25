import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Dialog } from 'evergreen-ui';


// import custom components
import Banner from './components/contributeBanner';
import Trending from './components/trending';

function App() {
  // initialize state of showLoginOverlay as false to hide it
  


  return (
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
    </div>
  );
}

export default App