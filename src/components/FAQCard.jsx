import React, { useState } from 'react'

function FAQCard({question, answer}) {
  /* Toggle Answer */
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-light-purple p-8 m-1 cursor-pointer rounded'>
        <h3 
            onClick={toggleAnswer}
            className='text-xl font-bold'
        >{question}</h3>
        {isOpen &&
            <p
                className='mt-4'
            >{answer}</p>
        }
        
    </div>
  )
}

export default FAQCard