import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import Logo from '../assets/POM-LOGO.png'

function NavMenu() {
  return (
    <Navbar fluid rounded className='bg-pom-white'>
      <Navbar.Brand>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Proof of Membership Logo" />
      </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">
            About PoM
          </Navbar.Link>
          <Navbar.Link href="#">Community base</Navbar.Link>
          <Navbar.Link href="#">Use Cases</Navbar.Link>
          <Navbar.Link href="#">Benefits</Navbar.Link>
          <Navbar.Link href="#">FAQs</Navbar.Link>
        </Navbar.Collapse>

        <div className='flex flex-row gap-4 justify-end'>
          <Navbar.Toggle />
          <Button href="https://app.pom.cards/" color='dark'>LAUNCH APP</Button>
        </div>

        

    </Navbar>
  )
}

export default NavMenu