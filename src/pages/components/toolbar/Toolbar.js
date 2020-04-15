import React from 'react';
import './css/toolbar.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar() {

  return (
    <header>
      <nav>
        <img src={logo} alt="error"></img>
        <div className="toolbar-itens-container">
          <Link to="/coffees" className="selected-link">COFFEES</Link>
          <Link to="/">COFFEEHOUSE</Link>
          <Link to="/">SOCIAL IMPACT</Link>
          <Link to="/">STARBUCKS REWARDS</Link>
          <Link to="/">STORIES</Link>
        </div>
        <div className="background-search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </nav>
    </header>
  );
}