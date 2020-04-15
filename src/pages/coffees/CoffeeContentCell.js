import React from 'react';
import './css/coffees.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import testeimg from './images/teste.png';

import coffeSizeSmall from './images/coffee-sizes/coffe-icon-small.png';
import coffeSizeMedium from './images/coffee-sizes/coffe-icon-medium.png';
import coffeSizeLarge from './images/coffee-sizes/coffe-icon-largel.png';

export default function CoffeeContentCell(props) {
  return (
    <div className="content">
      <div className="image-container">
        <img src={testeimg} alt="ss" />
      </div>
      <div className="content-container">
        <h2>{props.coffeeName}</h2>
        <p>{props.description}</p>
        <div class="stars-container">
          <FontAwesomeIcon icon={faStar} className="star star-selected" />
          <FontAwesomeIcon icon={faStar} className="star star-selected" />
          <FontAwesomeIcon icon={faStar} className="star star-selected" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>
        <div className="coffee-sizes-container">
          <div className="coffe-size">
            <img src={coffeSizeSmall} alt="" />
          </div>
          <div className="coffe-size">
            <img src={coffeSizeMedium} alt="" />
          </div>
          <div className="coffe-size">
            <img src={coffeSizeLarge} alt="" />
          </div>
        </div>
        <div className="price-and-amount">
          <h2>5.54$</h2>
          <div className="select-amount-container">
            <FontAwesomeIcon icon={faAngleLeft} className="icon"/>
            <h4>1</h4>
            <FontAwesomeIcon icon={faAngleRight} className="icon"/>
          </div>
        </div>
        <div className="buy-buttons-container">
          <button>Place Order</button>
          <h4>Cancel</h4>
        </div>
      </div>
    </div>
  );
}