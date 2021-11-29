import React, { useState, useEffect } from 'react';
import api from './services/api';
import img from './placeholder.png';

import { useParams } from 'react-router-dom';

export default function Card() {
  const [card, setCard] = useState();
  let params = useParams();
  useEffect(() => {
    api
      .get(`/cards/${params.invoiceId}`)
      .then((response) => {
        setCard(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);
  // let params = useParams();
  console.log(card);
  return (
    <>
      <div>
        {card ? (
          <>
            <p>id: {card.card.id}</p> <p>name: {card.card.name}</p>
            <p>text: {card.card.text}</p>
            <img key={card.card.id} src={card.card.imageUrl || img} />
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
}
