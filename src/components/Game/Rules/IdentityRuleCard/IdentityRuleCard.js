import React from 'react'
import './IdentityRuleCard.css'

function IdentityRuleCard({name, power, block}) {
    return (
        <div className='id-rule-card'>
                <h3>{name}</h3>
                <div className='id-rule-content'>
                    <h5> Power: {power} </h5>
                    <h5> Block: {block}</h5> 
                </div>
                 
        </div>
        
    )
}

export default IdentityRuleCard