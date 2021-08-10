import React from 'react';
import { Parallax } from 'react-parallax';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'


const image1 =
  "https://i.postimg.cc/D0gbsmyd/Whats-App-Image-2021-08-08-at-11-03-38-AM.jpg";
const image2 =
  "https://i.postimg.cc/6pk5WRd2/logo-2.jpg";
const image3 =
  "https://i.postimg.cc/VvP0hpN6/logo-3.jpg";
const image4 =
  "https://i.postimg.cc/28hNmJSY/logo-4.jpg"
const inlineStyle = {
  background: '#fff',
  left: '10%',
  top: '90%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax bgImage={ image1 } strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}> knit</div>
        </div>
      </Parallax>
      <Parallax bgImage={ image2 } blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Miss</div>
        </div>
      </Parallax>
      <Parallax bgImage={ image3 } strength={-200} >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Miss</div>
        </div>
        </Parallax>
       <Parallax
        bgImage={ image4 }
        strength={200}
        >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>tuck</div>
          <span>
          <FontAwesomeIcon ClassName="faicons" icons='trash'/>
          </span>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
    
  );
}

export default App;
