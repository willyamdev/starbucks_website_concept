import React, { useState } from 'react';
import './css/toolbar.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar() {

  let [linkSelected, setSelectedLink] = useState(0);

  let menuContainer = React.createRef();
  let shadowMenuContainer = React.createRef();
  let menuContainerElement;
  let shadowMenuElement;

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


  function openAndCloseMenu() {
    menuContainerElement = menuContainer.current;
    shadowMenuElement = shadowMenuContainer.current;

    if (menuContainerElement.offsetLeft !== 0) {
      menuContainerElement.style.left = "0px";
      shadowMenuElement.style.display = "block";
    } else {
      menuContainerElement.style.left = "-300px";
      shadowMenuElement.style.display = "none";
    }
  }

  return (
    <header>
      <div className="shadow-menu-container" ref={shadowMenuContainer} onClick={openAndCloseMenu}></div>
      <div className="menu-container" ref={menuContainer}>
        <img src={logo} alt="error"></img>

        {links.map((value, index) => {
          return <Link to={value.rote} onClick={() =>{setSelectedLink(value.index); openAndCloseMenu()}}>{value.linkText}</Link>;
        })}

      </div>
      <nav>
        <FontAwesomeIcon icon={faBars} className="menu-button" onClick={openAndCloseMenu} />
        <img src={logo} alt="error"></img>
        <div className="toolbar-itens-container">

          {links.map((value, index) => {

            if (linkSelected === value.index) {
              return <Link to={value.rote} className="selected-link" onClick={() => setSelectedLink(value.index)}>{value.linkText}</Link>;
            } else {
              return <Link to={value.rote} onClick={() => setSelectedLink(value.index)}>{value.linkText}</Link>
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