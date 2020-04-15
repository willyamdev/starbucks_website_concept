import React from 'react';
import './css/coffees.css';

export default function CoffeeCell(props) {
  return (
    <div className="coffee-cell" onClick={props.onclick}>
        <h4>{props.coffeeName}</h4>
    </div>
  );
}