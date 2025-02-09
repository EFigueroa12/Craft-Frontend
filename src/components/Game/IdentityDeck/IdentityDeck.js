import React from "react";
import './IdentityDeck.css';
import IdentityImage from '../../../assets/IdentityCard.png';

function IdentityDeck() {
  return (
    <div className="identitydeck-container">
      <div className="identitydeck-content">
        <img src={IdentityImage} alt="back-card" className="id-card"/>
      </div>
    </div>
  );
}

export default IdentityDeck;
