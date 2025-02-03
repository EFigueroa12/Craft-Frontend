import React from 'react';
const userHand = ["Rock", "Paper"]
const Hand = () => {
    
  return (
    <div className="Hand">
        {userHand.map((item, index)=>(
            <div key={index} className="card">
                {item}
            </div>
        ))}   
    </div>
  );
}

export default Hand;
