import React from 'react'
import { Button } from 'flowbite-react'
import  ConnectImg  from '../assets/connect.png'
import  PomCommunityImg  from '../assets/pom_community.png'
import PomCardImg from '../assets/pom_card.png'

function Community() {
  return (
    <div className='grid grid-cols-2 w-screen'>
      <div className='col-span-2 p-8 container flex flex-col items-center'>
        <h2>Community Base</h2>
        <p>Navigate through a wide range of web3 communities in one place.</p>
        <p>Access essential information about each community, including their mission, membership size, and reviews, to make informed decisions about participation</p>
        <Button href="https://app.pom.cards/" color='dark'  className='w-1/4'>TRY NOW</Button>
    </div>

    <div className='W-10/12 H-96'>

      <img src={ConnectImg} alt='Connect Pom'/>

      <h2>CONNECT WITH LIKE MINDED INDIVIDUALS</h2>
      <p>
      Share your experiences, insights and concerns about different communities.</p>
      
    </div>

    <div className='W-10/12 H-96'>      
      <img src={PomCommunityImg} alt ='Pom Community' />

      <h2>LISTEN & RESPOND TO FEEDBACK</h2>
      <p>
      Verify your community and respond to concerns. (Check FAQs for more details on the process and pricing).</p>
    </div>

    <div className='bg-light-purple col-span-2 flex flex-col justify-evenly items-center p-16'>
      <h2>Personalized & customized memberships</h2>
      <p>The best thing is that community registration and membership minting are available as a free public good!</p>

      <Button href="https://app.pom.cards/" color='dark'  className='w-1/4'>TRY NOW</Button>

    <img src={PomCardImg} alt='Pom Card' className='w-1/2'/>
    </div>
    
    </div>
  )
}

export default Community