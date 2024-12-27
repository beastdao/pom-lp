import React from 'react'
import { Button } from 'flowbite-react'
import SoulboundTokenImg from '../assets/soulbound_token.png'
import PomProtocolImg from '../assets/pom_protocol.png'
import CommunityImg from '../assets/community.png'

function About() {
  return (
    <section className='grid grid-cols-2 gap-y-8 m-8' id="about">
      <div className='bg-pastel-green p-8 rounded flex flex-col justify-evenly'>
        <h2>About PoM</h2>
        <p>Welcome to PoM – where web3 communities thrive.</p>

        <p>PoM offers decentralized token-based memberships for communities, simplifying authentication for groups, clubs, projects, DAOs, and their members.</p>

        <p>Register your community effortlessly on our Community Base and mint personalized, customizable SoulBound Tokens for members.</p>

        <Button href="https://app.pom.cards/" color='dark'  className='w-1/2'>TRY NOW</Button>
      </div>

        <div  className='bg-pastel-green-light p-8 rounded'>
          <img src={SoulboundTokenImg}  className='w-full'/>
        </div>

        {/* About PoM section 2 */}
      <div className='bg-pastel-green p-8 rounded flex flex-col justify-evenly'>
        <h2>About PoM</h2>
        <p>PoM aims to make the crypto space safer, and is based on the 3 key pillars:</p>

        <p>1. PoM protocol - a decentralised token-based memberships system for community registration, issuance of personalized memberships, and information validation, available as a public good.</p>
        <p>
        2. PoM for Communities: an ultimate tool, allowing to vote together, to enable token-gated access or to boost members identification using beautiful digital merch and much more!</p>
        <p>3. PoM for Ecosystem: a powerful tech, enabling new public goods & commercial projects. Our flagship project is: Community Base (more info below).</p>

        <Button href="https://app.pom.cards/" color='dark'  className='w-1/2'>TRY NOW</Button>
      </div>

        <div  className='bg-pastel-green-light p-8 rounded'>
          <img src={PomProtocolImg} alt="PoM Protocol" className='w-full'/>
        </div>

        {/* How does it work section */}
        <div className='bg-pastel-blue p-8 rounded flex flex-col justify-evenly'>
        <h2>PoM for Communities</h2>
        <p>
        Create your community effortlessly with PoM, get personalized, customizable SoulBound Tokens available for your members for free, and boost community cohesion, engagement, and resources.</p>
        <ol>
          <li>1. Create Your Community with the PoM dApp</li>
          <li>2. Invite Members to get PoM Soulbound Tokens</li>
          <li>3. Use token-based memberships for benefit of your community in various ways</li>
        </ol>

        <Button href="https://app.pom.cards/" color='dark'  className='w-1/2'>TRY NOW</Button>
      </div>

        <div  className='bg-pastel-blue-light p-8 rounded'>
          <img src={CommunityImg} alt="PoM Protocol" className='w-full'/>
        </div>

    </section>
  )
}

export default About