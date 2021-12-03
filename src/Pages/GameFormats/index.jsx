import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import BackButton from '../../components/backButton';
import Title from '../../components/Title';
import './styles.css';

const Formats = () => {
  const [formats, setFormats] = useState();
  useEffect(() => {
    api
      .get(`/formats`)
      .then((response) => {
        setFormats(response.data.formats);
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Ops! Ocorreu um erro!', err);
      });
  }, []);
  return formats ? (
    <>
      <BackButton> </BackButton>
      <Title />
      This is the list of game formats available
      <ul>
        {formats.map((elem) => (
          <li key="elem">{elem}</li>
        ))}
      </ul>
      {}
    </>
  ) : (
    ''
  );
};
export default Formats;
