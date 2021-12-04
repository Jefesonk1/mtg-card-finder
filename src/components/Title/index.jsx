import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Title = () => {
  return (
    <Link to="/" id="linkTitle">
      <h1 id="title">
        <span id="m">M</span>
        <span id="a">a</span>
        <span id="g">g</span>
        <span id="i">i</span>
        <span id="c">c</span>: The Gathering Card Finder
      </h1>
    </Link>
  );
};
export default Title;
