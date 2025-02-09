import React, {useState, useEffect} from 'react';
import './Hand.css';
import RockImage from '../../../assets/rock.png';
import PaperImage from '../../../assets/paper.png';
import ScissorsImage from '../../../assets/scissors.png';
import CockroachImage from '../../../assets/cockroach.png';
import Inventory from './Inventory/Inventory';

function Hand() {
  const [userHand, setUserHand] = useState([])

  const identityCards = {
    rock: RockImage,
    paper: PaperImage,
    scissors: ScissorsImage,
    cockroach: CockroachImage
  }

  useEffect (() => {
    const result = {"hand": ["rock", "paper"]}
    setUserHand(result.hand)
  }, [])

  return (
    <div className="hand-container">
        <h3> User Hand</h3>
        { userHand.length === 2 && (
          <div className='hand-content'>
            <img src= {identityCards[userHand[0]]} alt={userHand[0]} className='user-card'/>
            <img src= {identityCards[userHand[1]]} alt={userHand[1]} className='user-card'/>
          </div>
        )}
        <Inventory />
    </div>
  );
}

export default Hand;
