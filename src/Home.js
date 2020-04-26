import React from 'react';
import Banner from './components/contributeBanner';
import New from './components/New';
import Trending from './components/trending';

function Home() {
  return (
    <div>
      <Banner verified={true} />
      <Trending />
      <New />
    </div>
  );
}

export default Home;
