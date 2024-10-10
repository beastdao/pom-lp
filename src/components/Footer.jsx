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
        <Footer.Link href="#">TOS</Footer.Link>
        <Footer.Link href="#">PRIVACY POLICY</Footer.Link>
        <Footer.Link href="#">IMPRINT</Footer.Link>
        <Footer.Link href="mailto: pomcardsnft@gmail.com">CONTACT US</Footer.Link>
      </Footer.LinkGroup>

      {/* Social media icons */}
      <Footer.Icon href="#" icon={FaXTwitter} />
      <Footer.Icon href="#" icon={FaDiscord} />
    </Footer>
  )
}

export default FooterNav