import { useState } from 'react';
import './App.css';
import Game from './components/Game/Game'
import UsernameEntry from './components/Home/UsernameEntry/UsernameEntry'


function App() {
  const [username, setUsername] = useState(null)
  const [playerId, setPlayerId] = useState(null)

  return (
    <div className='app-container'>
      { !username ?
        (<UsernameEntry onUsernameSet={setUsername} onSetPlayerId={setPlayerId}/>) :
        (<Game username={username} playerId={playerId}/>)
      }
    </div>
  );
}

export default App;
