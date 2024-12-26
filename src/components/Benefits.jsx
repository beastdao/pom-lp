import React from 'react'
import { Button } from 'flowbite-react'
import data from '../benefits.json'
import BulletStar from '../assets/Bullet_Star.png'

function Benefits() {
  return (
    <div className='w-3/4 mx-auto' id="benefits">
      <h1 className='text-center mb-4'>Benefits of Soulbound Tokens</h1>

      <h2 className='text-center mb-4'>FOR COMMUNITIES</h2>
      {data.communities.map(
        (benefit, index) => (
          <div key={index} className='mb-8 flex flex-row justify-start items-center'>
            <img src={BulletStar} alt='bullet star' className='inline-block mr-4'/>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          </div>
      )
      )}
      <Button href="https://app.pom.cards/" color='dark' className='sm:w-1/2 w-full mx-auto mb-12'>TRY NOW</Button>

      <h2 className='text-center mb-4'>FOR NEWCOMERS</h2>  
      {data.newcomers.map(
        (benefit, index) => (
          <div key={index} className='mb-8 flex flex-row justify-start items-center'>
            <img src={BulletStar} alt='bullet star' className='inline-block mr-4'/>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          </div>
      )
      )}
      <Button href="https://app.pom.cards/" color='dark' className='sm:w-1/2 w-full mx-auto mb-8'>TRY NOW</Button>
      
    </div>
  )
}

export default Benefits