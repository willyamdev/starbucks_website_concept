import React, { useState } from 'react';
import './css/toolbar.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar() {

  let [linkSelected, setSelectedLink] = useState(0);

  let links = [
    {
      index: 1,
      linkText: "COFFEES",
      rote: "/coffees"
    },
    {
      index: 2,
      linkText: "COFFEEHOUSE",
      rote: "/"
    },
    {
      index: 3,
      linkText: "SOCIAL IMPACT",
      rote: "/"
    },
    {
      index: 4,
      linkText: "STARBUCKS REWARDS",
      rote: "/"
    },
    {
      index: 5,
      linkText: "STORIES",
      rote: "/"

    }
  ];

  return (
    <header>
      <nav>
        <img src={logo} alt="error"></img>
        <div className="toolbar-itens-container">

          {links.map((value, index) => {

            if (linkSelected === value.index) {
              return <Link to={value.rote} className="selected-link" onClick={()=>setSelectedLink(value.index)}>{value.linkText}</Link>;
            } else {
              return <Link to={value.rote} onClick={()=>setSelectedLink(value.index)}>{value.linkText}</Link>
            }

          })}
          
        </div>
        <div className="background-search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </nav>
    </header>
  );
}