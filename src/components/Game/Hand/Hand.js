import React, {useState, useEffect} from 'react';
import './Hand.css';
import RockImage from '../../../assets/rock.png';
import PaperImage from '../../../assets/paper.png';
import ScissorsImage from '../../../assets/scissors.png';
import CockroachImage from '../../../assets/cockroach.png';
import Inventory from './Inventory/Inventory';

function Hand({playerId, gameInit, username}) {
  const [userHand, setUserHand] = useState([])

  const identityCards = {
    rock: RockImage,
    paper: PaperImage,
    scissors: ScissorsImage,
    cockroach: CockroachImage
  }

  useEffect (() => {
    const init_hand = async() => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/new_hand/${playerId}`, {
          method: "GET"
        })
        if (response.ok){
          const data = await response.json()
          const result = {"hand": [data[0].card_type, data[1].card_type]}
          setUserHand(result.hand)
        }
      } catch(error) {
        console.error("Fetch error", error)
      }
    }

    if (gameInit){
      init_hand()
    }

  }, [gameInit, playerId])

  return (
    <div className="hand-container">
        <h3> {username}'s Hand</h3>
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
