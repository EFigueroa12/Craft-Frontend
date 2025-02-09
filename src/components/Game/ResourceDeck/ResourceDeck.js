import React from "react";
import ResourceImage from "../../../assets/resourceCard.png";
import './ResourceDeck.css';

function ResourceDeck() {
  return (
    <div className="resourcedeck-container">
      <div className="resourcedeck-content">
        <img src={ResourceImage} alt="back-card" className="resource-card"/>
      </div>
    </div>
  );
}

export default ResourceDeck;
