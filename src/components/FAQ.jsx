import React from 'react';
import data from '../faq.json';
import FAQCard from './FAQCard';

function FAQ() {

  return (
    <div className='w-3/4 mx-auto'>
      <h2 className='text-center'>FAQ</h2>
      {Object.entries(data.faq).map(([sectionKey, { title, questions }]) => (
        <div key={sectionKey} className='mb-8'>
          <h3>{title}</h3>
          {questions.map(({ title: questionTitle, text }, index) => (
            <FAQCard key={index} question={questionTitle} answer={text} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
