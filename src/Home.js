import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [datasets, setDatasets] = useState([{title: 'title_1', description: 'description_1', url: 'url'}, ]);
  return (
    <div>
      {datasets.map(dataset => (
        <Link to={`/datasets/${encodeURI(dataset.title)}`}>Dataset Card</Link>
      ))}
    </div>
  );
}

export default Home;
