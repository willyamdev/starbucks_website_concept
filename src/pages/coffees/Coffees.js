import React, {useState} from 'react';
import './css/coffees.css';
import CoffeeCell from './CoffeeCell';
import CoffeeContentCell from './CoffeeContentCell';

export default function Coffees() {

  let [coffeeName, setCoffeeName] = useState("Blonde Caffè Americano");
  let [description, setDescription] = useState("unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

  function changea(){
    setCoffeeName("aaaa");
    setDescription("bbbb");
  }

  return (
    <section>
      <CoffeeContentCell coffeeName={coffeeName} description={description}/>
      <div>
        <CoffeeCell coffeeName="Blonde Caffè Americano" onclick={changea}/>
        <CoffeeCell coffeeName="Cafe 2" />
        <CoffeeCell coffeeName="Cafe 3" />
        <CoffeeCell coffeeName="Cafe 4" />
      </div>
    </section>
  );
}