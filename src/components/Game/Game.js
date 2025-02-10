
import { useState, useEffect, useRef } from 'react';
import './Game.css';
import Hand from './Hand/Hand'
import IdentityDeck from './IdentityDeck/IdentityDeck';
import ResourceDeck from './ResourceDeck/ResourceDeck';
import Rules from './Rules/Rules'
import UserTurn from './UserTurn/UserTurn';
import Home from '../Home/Home'

function Game({username, playerId}) {
  const [render, setRender] = useState(false)
  const [gamePage, setGamePage] = useState(true)
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
    if (!render){
      init_game()
    }
  }, [render, playerId])

  const deleteGame = async (game_id, e) => {
    e.preventDefault()
    try {
      console.log(game_id)
      const response = await fetch(`http://127.0.0.1:5000/end_game/${game_id}`, {
      method: "DELETE"
      })
      if (response.ok){
        console.log('deleted!')
        setGamePage(false)
      }
      else {
        console.error("Failed to delete game.")
      }
    } catch (error) {
      console.error("Fatch error", error)
    }
  }

  return (
    <div className='game-container'>
      { render ?
      (  <>
          { gamePage ? 
            (<>
                <button 
                  className="exit-btn" 
                  onClick={(e)=>deleteGame(gameData.game_id, e)}
                > Quit Game 
                </button>
                <div className='top-layer'>
                  <ResourceDeck />
                  <IdentityDeck />
                </div>
                <div className='player-layer'>
                  <Hand playerId= {playerId} gameInit={render} username={username}/>
                  <UserTurn />
                </div>
                <Rules />
              </>) 
            : 
            (<div>
              <Home username={username} playerId={playerId}/>
            </div>) 
          }
        </>
        ) :
        (<h3> Loading game... </h3>)
      }
    </div>
  );
}

export default Game;
