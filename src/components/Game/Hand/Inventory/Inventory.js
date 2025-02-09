import React, {useState, useEffect} from 'react'
import './Inventory.css'
import metalImg from '../../../../assets/metal.png'
import woodImg from '../../../../assets/wood.png'
import stoneImg from '../../../../assets/stone.png'

function Inventory() {
    const [userInventory, setUserInventory] = useState([])

    const resourceImages = {
        metal: metalImg,
        wood: woodImg,
        stone: stoneImg
    }

    useEffect(()=> {
        const resultInventory = {"inventory": ["metal", "metal", "wood", "stone"]}
        setUserInventory(resultInventory.inventory)
    }, [])
    
    return (
        <div className='inventory-container'>
            <h4> Resource Inventory </h4>
            <div className='inventory-content'>
                {userInventory.map((item, index)=>(
                    <img key={index} src={resourceImages[item]} alt={item} className='rsc-card'/>
                ))}
                
            </div>
        </div>
    )
}

export default Inventory