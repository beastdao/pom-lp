import React from 'react'
import { Button } from 'flowbite-react'
import  ConnectImg  from '../assets/connect.png'
import PomCardImg from '../assets/pom_card.png'
import feedbackImg from '../assets/feedback_img.png'

function Community() {
  return (
    <>
      <div className='md:container md:mx-auto flex flex-col justify-evenly items-center md:w-3/6 md:h-96 p-8 min-h-96 text-center'>
        <h2>Community Base</h2>
        A flagship PoM project for the ecosystem, aiming to make the web3 space safer for the next billion users.
Community Base is a comprehensive database, helping to navigate through a wide range of web3 communities in one place.

        <p>Access essential information about each community, including their value, membership size, and members' reviews, to make informed decisions about participation.</p>

        <Button href="https://app.pom.cards/" color='dark'  className='w-1/4'>TRY NOW</Button>
    </div>

    {/* Cards row */}
    <div className='flex flex-row justify-between p-8 gap-2'>
      <div className='W-10/12 H-96 bg-light-purple rounded p-8'>

        <img src={ConnectImg} alt='Connect Pom'/>

        <h3>CONNECT WITH LIKE MINDED INDIVIDUALS</h3>
        <p>
        Share your experiences, insights and concerns about different communities.</p>

        </div>

        <div className='W-10/12 H-96 bg-light-purple rounded p-8'>      
        <img src={feedbackImg} alt ='Pom Community' />

        <h3>LISTEN & RESPOND TO FEEDBACK</h3>
        <p>
        Verify your community and respond to concerns. (Check FAQs for more details on the process and pricing).</p>
      </div>

      
    </div>    

    {/* Purple section */}
    <div className='bg-light-purple col-span-2 flex flex-col justify-evenly items-center p-16'>
        <h2>Personalized & customized memberships</h2>
        <p>The best thing is that community registration and membership minting are available as a free public good!</p>

        <Button href="https://app.pom.cards/" color='dark'  className='w-1/4'>TRY NOW</Button>

        <img src={PomCardImg} alt='Pom Card' className='w-1/2'/>
      </div>
    </>
  )
}

export default Community