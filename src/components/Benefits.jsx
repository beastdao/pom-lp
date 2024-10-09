import React from 'react'
import { Button } from 'flowbite-react'
import data from '../benefits.json'

function Benefits() {
  return (
    <div>
      <h1>Benefits of Soulbound Tokens</h1>

      {/* Repeated code. Maybe refactor here? */}

      <h2>FOR COMMUNITIES</h2>
      {data.communities.map(
        (benefit, index) => (
          <div key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
      )
      )}
      <Button href="https://app.pom.cards/" color='dark'>TRY NOW</Button>

      <h2>FOR NEWCOMERS</h2>  
      {data.newcomers.map(
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