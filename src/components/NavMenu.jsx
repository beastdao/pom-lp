import React from 'react'
import { Button, Navbar, Dropdown, Avatar } from 'flowbite-react'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '../assets/POM-LOGO.png'

function NavMenu() {
  return (
    <Navbar fluid rounded className='bg-pom-white'>
      <Navbar.Brand>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Proof of Membership Logo" />
      </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link to="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link to="#about">
            About PoM
          </Navbar.Link>
         
          <Dropdown
            arrowIcon={true}
            inline
            label="Use Cases"
            placement='bottom'
        >
            <Dropdown.Item href="#">PoM for People</Dropdown.Item>
            <Dropdown.Item href="#">PoM for Communities</Dropdown.Item>
            <Dropdown.Item href="#">PoM for Ecosystem Community Base</Dropdown.Item>
         </Dropdown>
          
          <Navbar.Link as="a" href="#benefits">Benefits</Navbar.Link>
          <Navbar.Link as="a" href="#faq">FAQs</Navbar.Link>
          <Navbar.Link href="#blog">Blog</Navbar.Link>
        </Navbar.Collapse>

        <div className='flex flex-row gap-4 justify-end'>
          <Navbar.Toggle />
          <Button href="https://app.pom.cards/" color='dark'>LAUNCH APP</Button>
        </div>

        

    </Navbar>
  )
}

export default NavMenu