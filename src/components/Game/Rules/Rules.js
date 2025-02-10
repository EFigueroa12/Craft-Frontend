import React from 'react'
import './Rules.css'
import IdentityRuleCard from './IdentityRuleCard/IdentityRuleCard'
import { IDENTITY_CARDS } from '../../utils/data'
import { RULES } from '../../utils/data'

function Rules() {
    return (
        <div className='rules-container'> 
            <h2> Rules for CraftID: </h2>
            <div className='id-rules-container'>
                <div className='id-rules-content'>
                    {IDENTITY_CARDS.map((item, index)=>(
                        <IdentityRuleCard 
                            key={index}
                            name={item.name} 
                            power={item.power} 
                            block={item.block}
                        />
                    ))}
                </div>
            </div>
            <div className='rsc-rule-container'>
                {RULES.map((item)=>(
                    <div className='rsc-rule-content'>
                        {item.rule}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rules