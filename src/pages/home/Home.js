import React from 'react';
import './css/home.css';

import image1 from './images/image1.png';
import image2 from './images/image2.png';

export default function Home() {
  return (
    <div className="content">
      <div className="image-home-container">
        <img src={image1} alt=""></img>
        <h3>$0 delivery fee for Starbucks orders on Uber Eats</h3>
        <p>Get your favorite food and drinks delivered.</p>
        <button>Order now</button>
      </div>
      <div className="image-home-container">
        <img src={image2} alt=""></img>
        <h3>Brew and enjoy from the comfort of home</h3>
        <p>Get your Starbucks favorites from your grocery provider.</p>
        <button>Learn more</button>
      </div>
    </div>
  );
}