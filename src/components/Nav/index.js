import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav_list">
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/group1">Group 1</Link></li>
      <li><Link to="/group2">Group 2</Link></li>
      <li><Link to="/group3">Group 3</Link></li>
      <li><Link to="/group4">Group 4</Link></li>
      <li><Link to="/group5">Group 5</Link></li>
      <li><Link to="/group6">Group 6</Link></li>
      <li><Link to="/panier">Mon Panier</Link></li>
    </ul>
  </nav>
);
export default Nav;
