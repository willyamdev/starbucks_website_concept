import React, { useState } from 'react';
import './css/coffees.css';
import CoffeeCell from './CoffeeCell';
import CoffeeContentCell from './CoffeeContentCell';

import blondeCaffeAmericano from './images/coffees-icons/blonde-caffee-americano.png';
import caffeeMisto from './images/coffees-icons/caffee-misto.png';

export default function Coffees() {

  let coffees = [
    {
      coffeeIcon:blondeCaffeAmericano,
      coffeeName: "Blonde Caffè Americano",
      coffeeDescription: "Espresso shots topped with hot water to produce a light layer of crema and are made with our Starbucks® Blonde Roast for an extra-smooth, subtly sweet and nuanced cup.. Pro Tip: For additional boost, ask your barista to try this with an extra shot (85 mg caffeine per shot)."
    },
    {
      coffeeIcon:caffeeMisto,
      coffeeName: "Caffè Misto",
      coffeeDescription: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed."
    },
  ]

  let [coffeeName, setCoffeeName] = useState(coffees[0].coffeeName);
  let [description, setDescription] = useState(coffees[0].coffeeDescription);

  function changeCoffee(coffee) {
    setCoffeeName(coffee.coffeeName);
    setDescription(coffee.coffeeDescription);
  }

  return (
    <section>
      <CoffeeContentCell coffeeName={coffeeName} description={description} />
      <div className="coffee-list">
        <CoffeeCell coffeeName={coffees[0].coffeeName} onclick={(e)=> changeCoffee(coffees[0])} />
        <CoffeeCell coffeeName={coffees[1].coffeeName} onclick={(e)=> changeCoffee(coffees[1])} />
      </div>
    </section>
  );
}