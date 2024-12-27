import React, { useState } from 'react'
import { PiArrowCircleRightThin, PiArrowCircleDownThin } from "react-icons/pi";

function FAQCard({question, answer}) {
  /* Toggle Answer */
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-light-purple p-8 m-1 cursor-pointer rounded'>
        <span 
          onClick={toggleAnswer}
          className='flex flex-row justify-between align-middle '
        >
          <h3 className='text-xl font-thin'
          >{question} </h3>
          &nbsp; 
          {isOpen ? <PiArrowCircleDownThin size={48}/> : <PiArrowCircleRightThin size={48} /> } 
        </span>
       
        <div 
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="mt-4">{answer}</p>
      </div>
        
    </div>
  )
}

export default FAQCard