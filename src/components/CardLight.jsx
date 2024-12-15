import React from 'react'
import BulletStar from '../assets/Bullet_Star.png'

function CardLight({title, text}) {
  return (
    <div>
        <div 
        className='bg-light-purple w-full rounded-t p-8 flex flex-row h-32 justify-center items-center'
    >
        <h3>{title}</h3>
        <img src={BulletStar} />

    </div>
    <div
            className='bg-purple w-full rounded p-8 h-64'
        >
            <p>{text}</p>   
        </div>
    </div>
    
  )
}

export default CardLight