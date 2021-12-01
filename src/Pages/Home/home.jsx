import React, { useState } from 'react';
import api from '../../services/api';
import InformationCard from '../../components/InformationCard/InformationCard';
import './styles.css';
import img from '../../fallback.jpg';
import { Link } from 'react-router-dom';

export default function Inicial() {
  const [card, setCard] = useState();
  const [cardName, setCardName] = useState();

  function fetchApi(e) {
    e.preventDefault();
    api
      .get(`/cards`, { params: { name: cardName, pageSize: 20 } })
      .then((response) => {
        setCard(response.data);
        console.log(response.data.args);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }

  return (
    <>
      <h1 id="title">
        <span id="m">M</span>
        <span id="a">a</span>
        <span id="g">g</span>
        <span id="i">i</span>
        <span id="c">c</span>: The Gathering Card Finder
      </h1>
      <div id="wrapperFormDiv">
        <form onSubmit={fetchApi}>
          <label htmlFor="cardName">Card Name:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            onChange={(e) => setCardName(e.target.value)}></input>
          <input id="btn" type="submit" value="Submit"></input>
        </form>
      </div>
      {card ? (
        <div id="wrapper">
          {!card.cards.length ? <p>No cards found!</p> : ``}
          {card.cards.map((elem) => (
            <Link id="link" to={`/card/${elem.id}`} key={elem.id}>
              <InformationCard key={elem.id} url={elem.imageUrl || img}>
                {elem.name}
              </InformationCard>
            </Link>
          ))}
        </div>
      ) : (
        ``
      )}
    </>
  );
}
