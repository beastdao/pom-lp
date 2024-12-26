import React from 'react'
import { Footer } from 'flowbite-react'
import Logo from '../assets/POM-LOGO.png'
import { FaXTwitter, FaDiscord  } from "react-icons/fa6";

function FooterNav() {
  return (
    <Footer container className='bg-pom-white'>
      <Footer.Brand 
        href="https://app.pom.cards"
        src={Logo}
        alt="PoM Logo"
        name="PoM"
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://drive.google.com/file/d/1nQ0Zrc218dltS4_VLLozjO6Scq_EofOB/view?usp=sharing">TOS</Footer.Link>
        <Footer.Link href="mailto: pomcardsnft@gmail.com">CONTACT US</Footer.Link>
      </Footer.LinkGroup>

      {/* Social media icons */}
      <Footer.Icon href="https://twitter.com/pomcards" icon={FaXTwitter} />
      <Footer.Icon href="https://discord.gg/McqF7vyCWx" icon={FaDiscord} />
    </Footer>
  )
}

export default FooterNav