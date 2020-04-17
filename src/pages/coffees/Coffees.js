import React, { useState } from 'react';
import './css/coffees.css';
import CoffeeCell from './CoffeeCell';
import CoffeeContentCell from './CoffeeContentCell';

import blondeCaffeAmericano from './images/coffees-icons/blonde-caffee-americano.png';
import caffeeMisto from './images/coffees-icons/caffee-misto.png';
import darkRoastCoffee from './images/coffees-icons/dark-roast coffee.png';
import cappuccino from './images/coffees-icons/cappuccino.png';
import espressoconPanna from './images/coffees-icons/espresso-con-panna.png';
import oatmilkHoneyLatte from './images/coffees-icons/oatmilk-honey-latte.png';

export default function Coffees() {

  let coffees = [
    {
      coffeeIcon: blondeCaffeAmericano,
      coffeeName: "Blonde Caffè Americano",
      coffeeDescription: "Espresso shots topped with hot water to produce a light layer of crema and are made with our Starbucks® Blonde Roast for an extra-smooth, subtly sweet and nuanced cup.. Pro Tip: For additional boost, ask your barista to try this with an extra shot (85 mg caffeine per shot).",
      stars: 2,
      basePrice:5.54
    },
    {
      coffeeIcon: caffeeMisto,
      coffeeName: "Caffè Misto",
      coffeeDescription: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.",
      stars: 4,
      basePrice:5.91
    },
    {
      coffeeIcon: darkRoastCoffee,
      coffeeName: "Dark Roast Coffee",
      coffeeDescription: "This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.",
      stars: 3,
      basePrice:3.27
    },
    {
      coffeeIcon: cappuccino,
      coffeeName: "Cappuccino",
      coffeeDescription: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
      stars: 5,
      basePrice:4.66
    },
    {
      coffeeIcon: espressoconPanna,
      coffeeName: "Espresso con Panna",
      coffeeDescription: "Espresso meets a dollop of whipped cream to enhance the rich and caramelly flavors of a straight-up shot.",
      stars: 4,
      basePrice:6.22
    },
    {
      coffeeIcon: oatmilkHoneyLatte,
      coffeeName: "Oatmilk Honey Latte",
      coffeeDescription: "Oatmilk and signature espresso are intentionally combined with a hint of honey and a toasted honey topping—a savory tribute to all things sweet and salty.",
      stars: 2,
      basePrice:4.77
    },
  ]

  let [coffeeName, setCoffeeName] = useState(coffees[0].coffeeName);
  let [coffeeDescription, setCoffeeDescription] = useState(coffees[0].coffeeDescription);
  let [coffeeIcon, setCoffeeIcon] = useState(coffees[0].coffeeIcon);
  let [coffeePrice, setCoffeePrice] = useState(coffees[0].basePrice);
  let [coffeeStars, setCoffeeStars] = useState(coffees[0].stars);

  function changeCoffee(coffee) {
    setCoffeeIcon(coffee.coffeeIcon);
    setCoffeeName(coffee.coffeeName);
    setCoffeeDescription(coffee.coffeeDescription);
    setCoffeePrice(coffee.basePrice);
    setCoffeeStars(coffee.stars);
  }

  return (
    <section>
      
      <CoffeeContentCell coffeeName={coffeeName} description={coffeeDescription} coffeeicon={coffeeIcon} coffeeprice={coffeePrice} coffeestars={coffeeStars}/>

      <div className="coffee-list">

        {coffees.map((value, index) => {
          return <CoffeeCell coffeeName={value.coffeeName} onclick={(e) => changeCoffee(value)} />
        })}

      </div>
    </section>
  );
}