import React from 'react';
import './style.css';

const InformationCard = (props) => {
  return (
    <div id="cardBox">
      <img src={props.url} />
      <div id="cardNameText">
        <p> {props.children} </p>
      </div>
    </div>
  );
};
export default InformationCard;
