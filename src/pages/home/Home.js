import React from 'react';
import './css/home.css';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

export default function Home() {
  return (
    <div className="content">
      <div className="image-home-container">
        <img src={image1} alt=""></img>
      </div>
      <div className="image-home-container">
        <img src={image2} alt=""></img>
      </div>
    </div>
  );
}