import React, { Component } from 'react'
import PropTypes from 'prop-types'

function CardImg({img, title, text}) {
  return (
    <div>
        <div 
        className='bg-light-purple rounded-t p-8 flex flex-row h-96 w-auto max-w-96 justify-center items-center'
    >
        <img src={img} className='w-96 m-8 p-8 object-scale-down'/>

    </div>
    <div
            className='bg-purple w-auto max-w-96 rounded p-8 h-52'
        >
            <h3 className='mb-4'>{title}</h3>
            <p>{text}</p>   
        </div>
    </div>
    
  )
}

Component.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default CardImg