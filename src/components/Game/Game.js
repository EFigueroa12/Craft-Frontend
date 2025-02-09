
import { useState, useEffect, useRef } from 'react';
import './Game.css';
import Hand from './Hand/Hand'
import IdentityDeck from './IdentityDeck/IdentityDeck';
import ResourceDeck from './ResourceDeck/ResourceDeck';
import Rules from './Rules/Rules'
import UserTurn from './UserTurn/UserTurn';

function Game({username, playerId}) {
  const [render, setRender] = useState(false)
  const [gameData, setGameData] = useState("")
  const hasFetched = useRef(false)
  
  useEffect(()=> {
    const init_game = async() => {
      console.log("sending fetch request", playerId)
      if (hasFetched.current) return 
      hasFetched.current = true

      try {
        const response = await fetch("http://127.0.0.1:5000/new_game", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({playerId})
        })
        if (response.ok){
          const data = await response.json()
          setGameData(data)
          setRender(true)
        }
        else {
          console.error("Failed to init game.")
        }
      }
      catch (error){
        console.error("Fatch error", error)
      }
    }
    if (playerId){
      init_game()
    }
  }, [playerId])

  function deleteGame(game_id){
    try {
      const response = fetch(`http://127.0.0.1:5000/end_game/${game_id}`, {
      method: "DELETE"
      })
      if (response.ok){
        console.log('deleted!')
      }
      else {
        console.log(response)
        console.error("Failed to delete game.")
      }
    }
    catch (error){
      console.error("Fatch error", error)
    }
  }

  return (
    <div className='game-container'>
      { render ?
        ( 
          <>
            <button onClick={()=>deleteGame(gameData.game_id)}> Quit Game </button>
            <h3>{username} </h3>
            {/* <h3> {playerId} </h3> */}
            <div className='top-layer'>
              <ResourceDeck />
              <IdentityDeck />
            </div>
            <div className='player-layer'>
              <Hand />
              <UserTurn />
            </div>
            <Rules />
          </>
        ) :
        (<h3> failed to render page Game</h3>)
      }
    </div>
  );
}

export default Game;
