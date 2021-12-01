import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import api from '../../services/api';
import img from '../../fallback.jpg';
import getAssets from '../../assets/icons/index';

import { useParams } from 'react-router-dom';
import './styles.css';

export default function Card() {
  const [card, setCard] = useState();
  let params = useParams();
  let str4 = '';

  useEffect(() => {
    api
      .get(`/cards/${params.invoiceId}`)
      .then((response) => {
        setCard(response.data);
      })
      .catch((err) => {
        console.log('Ops! Ocorreu um erro!', err);
      });
  }, []);

  const replaceSymbols = (str) => {
    const symbols = getAssets();
    let buffer = '';
    let symbolsArray = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] == '{') {
        buffer = '';
        i++;
        while (str[i] != '}') {
          buffer += str[i];
          i++;
        }
        symbolsArray.indexOf(buffer) === -1 ? symbolsArray.push(buffer) : '';
      }
    }

    let str2 = str;
    symbolsArray.forEach((element) => {
      let stringTratada = element;
      const regxp = RegExp(`\\{\\s*${element}[?^\\}]*\\}`, 'g');
      if (stringTratada.includes('/')) {
        stringTratada = stringTratada.split('/').join('');
      }
      str2 = str2.replace(regxp, `<img class="symbols" src="${symbols[stringTratada]}"/> `);
    });
    str4 = str2;
  };

  return card ? (
    <div id="wrapperCardInformation">
      <p>CardName: {card.card.name}</p>
      <img id="cardImages" key={card.card.id} src={card.card.imageUrl || img} />
      <p id="cardDescription">
        Text: {replaceSymbols(card.card.text)}
        {ReactHtmlParser(str4)}
      </p>

      <p>artist: {card.card.artist}</p>
      <p>setName: {card.card.setName}</p>
      <p>rarity: {card.card.rarity}</p>
      <p>converted mana cost: {card.card.cmc}</p>
      <div id="legalities">
        {card.card.legalities.map((elem) => (
          <>
            <a key={elem.format} className={elem.legality === 'Legal' ? 'legalCard' : 'bannedCard'}>
              {elem.format} {elem.legality}
            </a>
            {/* <br></br> */}
          </>
        ))}
      </div>
      {/* <p>mad: {card.card.multiverseid}</p> */}
    </div>
  ) : (
    ``
  );
}
