import React from 'react'
import { Carousel } from 'flowbite-react'

function UseCases() {
  return (
    <div className='min-h-96'>
      <h1>Use Cases</h1>

      <Carousel indicators={false}>
        <div className='bg-light-purple'>
          <div><h2>Descentralized Autonomous Organizations</h2></div>
          <div>
            <p>Boost a sense of belonging among members globally and enable collaborative decision-making with token-powered governance (*coming soon)</p>
          </div>
        </div>

        <div className='bg-light-purple'>
          <div><h2>Descentralized Autonomous Organizations</h2></div>
          <div>
            <p>Boost a sense of belonging among members globally and enable collaborative decision-making with token-powered governance (*coming soon)</p>
          </div>
        </div>

        <div className='bg-light-purple'>
          <div><h2>Descentralized Autonomous Organizations</h2></div>
          <div>
            <p>Boost a sense of belonging among members globally and enable collaborative decision-making with token-powered governance (*coming soon)</p>
          </div>
        </div>

        <div className='bg-light-purple'>
          <div><h2>Descentralized Autonomous Organizations</h2></div>
          <div>
            <p>Boost a sense of belonging among members globally and enable collaborative decision-making with token-powered governance (*coming soon)</p>
          </div>
        </div>

      </Carousel>
    </div>
  )
}

export default UseCases