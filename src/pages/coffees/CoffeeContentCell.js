import React, { useState, useEffect } from 'react';
import './css/coffees.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import coffeSizeSmall from './images/coffee-sizes/coffe-icon-small.png';
import coffeSizeMedium from './images/coffee-sizes/coffe-icon-medium.png';
import coffeSizeLarge from './images/coffee-sizes/coffe-icon-largel.png';

import coffeSizeSmallEnabled from './images/coffee-sizes/coffe-icon-small-enabled.png';
import coffeSizeMediumEnabled from './images/coffee-sizes/coffe-icon-medium-enabled.png';
import coffeSizeLargeEnabled from './images/coffee-sizes/coffe-icon-largel-enabled.png';

export default function CoffeeContentCell(props) {

  let stars = [];
  let coffeeSizes = [
    {
      index: 1,
      coffeeSizeImage: coffeSizeSmall,
      coffeeSizeEnableImage: coffeSizeSmallEnabled
    },
    {
      index: 2,
      coffeeSizeImage: coffeSizeMedium,
      coffeeSizeEnableImage: coffeSizeMediumEnabled
    },
    {
      index: 3,
      coffeeSizeImage: coffeSizeLarge,
      coffeeSizeEnableImage: coffeSizeLargeEnabled
    },
  ]

  let [coffeePrice, setCoffeePrice] = useState(props.coffeeprice);
  let [coffeeAmount, setCoffeeAmount] = useState(1);

  let [coffeeSizeSelected, setCoffeeSize] = useState(1);

  useEffect(() => {
    setCoffeePrice(props.coffeeprice);
  }, [props.coffeeprice]);

  useEffect(() => {
    setCoffeePrice(props.coffeeprice * coffeeAmount);
  }, [coffeeAmount, props.coffeeprice]);

  function changePrice(action) {
    if (action) {
      setCoffeeAmount(coffeeAmount + 1);
    } else {
      if (coffeeAmount === 1) return;
      setCoffeeAmount(coffeeAmount - 1);
    }
  }

  function cancelButton(){
    setCoffeeAmount(1);
    setCoffeeSize(1);
  }

  for (let i = 0; i < 5; i++) {
    if (i < props.coffeestars) {
      stars.push(<FontAwesomeIcon icon={faStar} className="star star-selected" />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} className="star" />);
    }
  }

  return (
    <div className="content">
      <div className="image-container">
        <img src={props.coffeeicon} alt="" />
      </div>
      <div className="content-container">
        <h2>{props.coffeeName}</h2>
        <p>{props.description}</p>
        <div class="stars-container">
          {stars}
        </div>
        <div className="coffee-sizes-container">

          {coffeeSizes.map((value, index) => {
            if (value.index === coffeeSizeSelected) {
              return <div className="coffe-size coffe-size-selected" onClick={()=> setCoffeeSize(value.index)}>
                <img src={value.coffeeSizeEnableImage} alt="" />
              </div>
            } else {
              return <div className="coffe-size" onClick={()=> setCoffeeSize(value.index)}>
                <img src={value.coffeeSizeImage} alt="" />
              </div>
            }
          })}
        </div>
        <div className="price-and-amount">
          <h2>${coffeePrice.toFixed(2)}</h2>
          <div className="select-amount-container">
            <button onClick={() => changePrice(false)}> <FontAwesomeIcon icon={faAngleLeft} className="icon" /></button>
            <h4>{coffeeAmount}</h4>
            <button onClick={() => changePrice(true)} ><FontAwesomeIcon icon={faAngleRight} className="icon" /></button>
          </div>
        </div>
        <div className="buy-buttons-container">
          <button>Place Order</button>
          <h4 onClick={cancelButton}>Cancel</h4>
        </div>
      </div>
    </div >
  );
}