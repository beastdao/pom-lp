import React from 'react'
import { Button } from 'flowbite-react'
import BeastLogo from '../assets/beast_logo.png'

function Built() {
  return (
    <section 
      className='w-full md:w-1/2 mx-auto flex flex-col items-center justify-center p-8 text-center gap-4'
      >
      <img src={BeastLogo} alt="BEAST DAO Logo" />
      <h2 className='text-center'>PoM is being built by BEAST DAO members</h2>
       
        <p>BEAST DAO is a members-owned initiative, revolutionizing how we collaborate. It&apos;s your portal to co-create, fund and govern impactful projects.</p>

        <p>BEAST mission is to provide a way for people to come and work together on impactful projects they care about, having access to needed resources, expertise and connections.</p>

        <p>To fulfil our mission, we are forming an ever-growing community of technical and non-technical builders set to create tooling for Web3.</p>

        <Button color='dark'>GET INVOLVED WITH BEAST!</Button>

    </section>
  )
}

export default Built