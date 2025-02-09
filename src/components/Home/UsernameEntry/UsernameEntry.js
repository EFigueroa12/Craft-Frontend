import React, {useState} from 'react'

function UsernameEntry({onUsernameSet, onSetPlayerId}) {
    const [username, setUsername] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault() //prevent reload

        // make api request to create user
        const response = await fetch("http://127.0.0.1:5000/create_player", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({username})
        })
        //get response and check 
        if (response.ok){
            const data = await response.json()
            onSetPlayerId(data.player_id)
            onUsernameSet(username)
        }
        else {
            console.error("Failed to create user.")
        }
        
    }
        
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                />
                 <button type='submit'> Start Game</button>
            </form>
        </ div>
    )
};

export default UsernameEntry