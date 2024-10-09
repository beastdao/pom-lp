import React from 'react'
import data from '../faq.json'

function FAQ() {
  return (
    <div>

      <h2>FAQ</h2>

      {
        Object.entries(data.faq).map(([sectionKey, { title, questions }]) => (
          <div key={sectionKey}>
            <h3>{title}</h3>
            {questions.map(({ title: questionTitle, text }, index) => (
              <div key={index}>
                <h4>{questionTitle}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
          ))  
  }


    </div>
  )
}

export default FAQ