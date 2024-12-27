import React from 'react'
import { Button } from 'flowbite-react'
import HeroImage from '../assets/card_bubble.png'

function Hero() {
  return (
    <section className='hero flex flex-row p-16'>
        <div className='flex flex-col gap-4'>
            <h1>Proof of membership</h1>
            <p>Authenticate the Web3 Space, one Community at a time.</p>

            <Button href="https://app.pom.cards/" color='dark' size='lg' className='w-1/2'>TRY NOW</Button>
        </div>
        <img src={HeroImage} alt='Proof of Membership' className='w-1/2'/>

    </section>
  )
}

export default Hero