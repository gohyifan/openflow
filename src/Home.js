import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './components/contributeBanner';
import New from './components/New';

function Home() {
  const [datasets, setDatasets] = useState([{title: 'title_1', description: 'description_1', url: 'url'}, ]);
  return (
    <div>
      <Banner verified={true} />
      {datasets.map(dataset => (
        <Link to={`/datasets/${encodeURI(dataset.title)}`}>Dataset Card</Link>
      ))}
      <New />
    </div>
  );
}

export default Home;
