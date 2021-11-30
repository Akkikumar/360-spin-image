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
  const [count, setCount] = useState(1);
  const [completeUrl, setCompleteUrl] = useState(imgsrc + range + imgscrExt);
  const rangeRef = useRef('0');

  const work = () => {    
    setRange(rangeRef.current.value);
    setCompleteUrl(imgsrc + range + imgscrExt);
  };

  const loop = () => {
    alert("1");
    setCompleteUrl(imgsrc + count + imgscrExt);
    setTimeout(
      () => {        
        if(count !== 10){
          setCount(count => count + 1);
          loop();
        }
      }, 1000
    )    
  }

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
          max="42"
        />
        <img src={completeUrl} />        
      </div>
      <button onClick={loop}>play</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
