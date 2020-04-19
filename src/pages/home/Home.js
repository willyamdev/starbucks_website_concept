import React from 'react';
import './css/home.css';

import image1 from './images/image1.png';
import image2 from './images/image2.png';

export default function Home() {


  function openLink(url) {
    window.open(url, "_blank")
  }

  return (
    <div className="content">
      <div className="image-home-container">
        <img src={image1} alt=""></img>
        <h3>$0 delivery fee for Starbucks orders on Uber Eats</h3>
        <p>Get your favorite food and drinks delivered.</p>
        <button onClick={()=> openLink("https://1qt-1.tlnk.io/serve?action=click&site_id=113033&url_web=https://www.ubereats.com/brand/starbucks?&utm_campaign=ext-starbucks-sbxapp&$3p=a_custom_361342&sub_publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&invoke_url=ubereats://chain/browse?chainName=starbucks&sub_campaign=ext-starbucks-sbxapp")}>Order now</button>
      </div>
      <div className="image-home-container">
        <img src={image2} alt=""></img>
        <h3>Brew and enjoy from the comfort of home</h3>
        <p>Get your Starbucks favorites from your grocery provider.</p>
        <button onClick={()=> openLink("https://athome.starbucks.com/")}>Learn more</button>
      </div>
    </div>
  );
}