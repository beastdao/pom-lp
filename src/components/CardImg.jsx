import React from 'react'

function CardImg({img, title, text}) {
  return (
    <div>
        <div 
        className='bg-light-purple w-full rounded-t p-8 flex flex-row min-h-96 min-w-96 justify-center items-center'
    >
        <img src={img}/>

    </div>
    <div
            className='bg-purple w-full rounded p-8 min-h-48'
        >
            <h3 className='mb-4'>{title}</h3>
            <p>{text}</p>   
        </div>
    </div>
    
  )
}

export default CardImg