import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './styles.css';

const BackButton = () => {
  return (
    <Link to="/" id="linkBackButton">
      <div id="back">
        <IconContext.Provider value={{ className: 'backIcon' }}>
          <AiOutlineArrowLeft /> <span id="backText">back</span>
        </IconContext.Provider>
      </div>
    </Link>
  );
};
export default BackButton;
