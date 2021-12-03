import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const spinImages = [
  {},
  {
    assetName: 'decor_58144.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/6f6ed715-85a1-4f86-ac6f-c093ad476322/108695355.jpg',
    assetId: '35d94b8e-f10d-4afd-aa0c-7db3a8f1dbde',
    assetType: 'IMAGE',
    createdTime: '1638190563977',
    size: '733226',
  },
  {
    assetName: 'De´cor53.jpeg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/57012f04-67c1-4777-ad1f-f47e769d8be0/108695356.jpg',
    assetId: '3764e401-1be1-481f-8e77-a5aafd3b5a7c',
    assetType: 'IMAGE',
    createdTime: '1638190563966',
    size: '2757877',
  },
  {
    assetName: '887275066128_spin_R01_C21_2_m2.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/932b2e31-731d-41a0-a51c-8c3f3786d6ff/108695325.jpg',
    assetId: '8f3ca18b-9cae-4c9d-a346-9e424c877019',
    assetType: 'IMAGE',
    createdTime: '1638175008940',
    size: '1855607',
  },
  {
    assetName: '887275066128_spin_R01_C21_m12_m1.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/d46b9610-6d79-4876-8191-6d7c0e0ab09a/108695301.jpg',
    assetId: 'dcd16114-d7f1-49a8-a278-03ba13e2f824',
    assetType: 'IMAGE',
    createdTime: '1638168346190',
    size: '1633187',
  },
  {
    assetName: '887275066128_spin_R01_C21_2_m1.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/aec0a17f-f10b-4d27-8f87-17223a2a0837/108695302.jpg',
    assetId: '988dff74-fb70-4514-ab5d-7740b489f47f',
    assetType: 'IMAGE',
    createdTime: '1638168332643',
    size: '1820777',
  },
  {
    assetName: '887275066128_spin_R01_C21_m12_m.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/558af2fb-931e-4540-bbdb-1609602e536c/108695299.jpg',
    assetId: 'efdc733a-a1f6-460e-8d43-f0b42d17b54f',
    assetType: 'IMAGE',
    createdTime: '1638165842791',
    size: '1649032',
  },
  {
    assetName: '887275066128_spin_R01_C21_2_m.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/a68a427b-e1d7-4f92-b26d-b7fdb7d2c8f0/108695298.jpg',
    assetId: 'a615f83c-b2f7-4cf5-9758-827eb2a79f29',
    assetType: 'IMAGE',
    createdTime: '1638165748735',
    size: '1773176',
  },
  {
    assetName: 'decor_5814344.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/db3399e8-3bc2-4383-bb4e-25589b0fa7f1/108695296.jpg',
    assetId: 'adf78336-1591-46dc-933b-4c2b339609b8',
    assetType: 'IMAGE',
    createdTime: '1638164766767',
    size: '715625',
  },
  {
    assetName: 'decor_62123.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/936332d4-176d-4c0c-9c06-f7f7011184f4/108695297.jpg',
    assetId: '5c7bb791-ac06-4a17-838d-17f9ebfaf139',
    assetType: 'IMAGE',
    createdTime: '1638164766750',
    size: '760974',
  },
  {
    assetName: '887275066128_spin_R01_C08 copy 2.jpg',
    assetUrl:
      'https://ppmobileimages.lowes.com/test/productimages/5d031fc4-6494-41a6-a19f-3b8c97278d9f/108695004.jpg',
    assetId: '08ac0a10-9b34-4772-939c-7682974b0f05',
    assetType: 'IMAGE',
    createdTime: '1637933322975',
    size: '910099',
  },
];

const App = () => {
  const imgsrc =
    'https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/';
  const imgscrExt = '.png';
  const [slideCount, setSlideCount] = useState(0);
  const [count, setCount] = useState(0);
  const [completeUrl, setCompleteUrl] = useState(spinImages[1].assetUrl);
  const [magfyToggle, setMagfyToggle] = useState(false);
  const rangeRef = useRef(0);

  useEffect(() => {
    magfyToggle ? magnify('myimage', 3) : removeMagfy();
  }, [completeUrl]);

  useEffect(() => {
    if (slideCount > 0) {
      setTimeout(() => {
        setCompleteUrl(spinImages[slideCount].assetUrl);
      }, 500);
    }
  }, [slideCount]);

  const work = () => {
    console.log(rangeRef.current.value);
    setSlideCount(rangeRef.current.value);
  };
  const getAllImages = () => {
    return (
      <>
        {spinImages.map((assetDetails, index) => (
          <img
            src={assetDetails.assetUrl}
            onClick={(val) => {
              setCompleteUrl(assetDetails.assetUrl);
              debugger;
              if (index !== 0) {
                setMagfyToggle(true);
              } else {
                setCompleteUrl(spinImages[1].assetUrl);
                setMagfyToggle(false);
              }
            }}
            key={index}
            height="50"
            width="50"
          />
        ))}
      </>
    );
  };
  const reset = () => {
    setMagfyToggle(false);
    setCount(0);
    setCompleteUrl(spinImages[1].assetUrl);
  };

  useEffect(() => {
    if (!!spinImages[count]?.assetUrl && count > 0) {
      setCompleteUrl(spinImages[count].assetUrl);
      setTimeout(() => {
        play();
      }, 500);
    }
  }, [count]);

  const play = () => {
    setMagfyToggle(false);
    if (slideCount > 1 || count === spinImages.length) {
      setCount(1);
      setSlideCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const removeMagfy = () => {
    var prevImgMgGlass = document.getElementsByClassName('img-magnifier-glass');
    if (prevImgMgGlass.length > 0) {
      prevImgMgGlass[0].remove();
    }
  };
  const magnify = (imgID, zoom) => {
    var img, glass, w, h, bw, prevImgMgGlass;
    img = document.getElementById(imgID);
    prevImgMgGlass = document.getElementsByClassName('img-magnifier-glass');
    if (prevImgMgGlass.length > 0) {
      prevImgMgGlass[0].remove();
    }
    /*create magnifier glass:*/

    glass = document.createElement('DIV');
    console.log(glass);
    glass.setAttribute('class', 'img-magnifier-glass');
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize =
      img.width * zoom + 'px ' + img.height * zoom + 'px';
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener('touchmove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + 'px';
      glass.style.top = y - h + 'px';
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition =
        '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  };

  return (
    <div className="container">
      <div id="main">
        <input
          type="range"
          onChange={work}
          ref={rangeRef}
          id="range"
          value="0"
          min="0"
          max={spinImages.length - 1}
        />
        {magfyToggle ? (
          <div className="img-magnifier-container">
            <img src={completeUrl} id="myimage" />
          </div>
        ) : (
          <img src={completeUrl} id="myimage" />
        )}
      </div>
      {getAllImages()}
      <button onClick={play}>play</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
