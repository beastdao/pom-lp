import React from 'react';
import data from '../faq.json';
import FAQCard from './FAQCard';

function FAQ() {

  return (
    <section className='w-3/4 mx-auto' id="faq">
      <h2 className='text-center'>FAQ</h2>
      {Object.entries(data.faq).map(([sectionKey, { title, questions }]) => (
        <div key={sectionKey} className='mb-8'>
          <h3>{title}</h3>
          {questions.map(({ title: questionTitle, text }, index) => (
            <FAQCard key={index} question={questionTitle} answer={text} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
