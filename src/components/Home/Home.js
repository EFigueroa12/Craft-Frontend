import './Home.css'
import {useState} from 'react'
import Game from '../Game/Game'

function Home( {username, playerId}) {
    const [play, setPlay] = useState(false)
    return (
        <div className='home-container'>
            { play ?
            (<Game username={username} playerId={playerId}/>) :
            (   
                <div className='home-content'>
                    <h2> {username}'s Future User Home Page </h2>
                    
                    <button className="std-btn" onClick={()=> setPlay(true)}> Start New Game </button>
                </div>
            )
            }
        </div>
    )
}

export default Home