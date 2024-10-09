import React from 'react'
import { Button } from 'flowbite-react'
import data from '../benefits.json'

function Benefits() {
  return (
    <div>
      <h1>Benefits of Soulbound Tokens</h1>

      <h2>FOR COMMUNITIES</h2>

      {data.benefits.map(
        (benefit, index) => (
          <div key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
      )
      )}

      <Button href="https://app.pom.cards/" color='dark'>TRY NOW</Button>
      
    </div>
  )
}

export default Benefits