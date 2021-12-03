import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GiCardRandom } from 'react-icons/gi';
import api from '../../services/api';
import InformationCard from '../../components/InformationCard/index';
import img from '../../fallback.jpg';
import './styles.css';

export default function Inicial() {
  console.log(history);

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
      <Link to="/formats" id="linkGameFormats">
        <IconContext.Provider value={{ className: 'iconGameFormats' }}>
          <GiCardRandom /> <span> View Game Formats </span>
        </IconContext.Provider>
      </Link>

      <Link to="/" id="linkTitle">
        <h1 id="title">
          <span id="m">M</span>
          <span id="a">a</span>
          <span id="g">g</span>
          <span id="i">i</span>
          <span id="c">c</span>: The Gathering Card Finder
        </h1>
      </Link>
      <div id="wrapperFormDiv">
        <form onSubmit={fetchApi}>
          <label htmlFor="cardName">Card Name:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="e.g black lotus"
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
