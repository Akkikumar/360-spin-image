import React from 'react';
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const imgsrc =
    'https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/';
  const imgscrExt = '.png';
  const [range, setRange] = useState('1');
  const [completeUrl, setCompleteUrl] = useState(imgsrc + range + imgscrExt);
  const rangeRef = useRef('0');

  const work = () => {
    console.log(rangeRef.current.value);
    setRange(document.getElementById('range').value);
    setCompleteUrl(imgsrc + range + imgscrExt);
  };

  return (
    <div className="container">
      <div id="main">
        <input
          type="range"
          onChange={work}
          ref={rangeRef}
          id="range"
          value="1"
          min="1"
          max="36"
        />
        <img src={completeUrl} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
