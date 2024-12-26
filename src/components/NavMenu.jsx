import React from 'react';
import { Button, Navbar, Dropdown } from 'flowbite-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../assets/POM-LOGO.png';

function NavMenu() {
  return (
    <Navbar fluid rounded className="bg-pom-white">
      <Navbar.Brand>
        <img
          src={Logo}
          className="mr-3 h-6 sm:h-9"
          alt="Proof of Membership Logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link as={AnchorLink} href="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={AnchorLink} href="#about">
          About PoM
        </Navbar.Link>

        <Dropdown arrowIcon={true} inline label="Use Cases" placement="bottom">
          <Dropdown.Item>
            <AnchorLink href="#people">PoM for People</AnchorLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <AnchorLink href="#communities">PoM for Communities</AnchorLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <AnchorLink href="#ecosystem">
              PoM for Ecosystem Community Base
            </AnchorLink>
          </Dropdown.Item>
        </Dropdown>

        <Navbar.Link as={AnchorLink} href="#benefits">
          Benefits
        </Navbar.Link>
        <Navbar.Link as={AnchorLink} href="#faq">
          FAQs
        </Navbar.Link>
        <Navbar.Link as={AnchorLink} href="#blog">
          Blog
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex flex-row gap-4 justify-end">
        <Navbar.Toggle />
        <Button href="https://app.pom.cards/" color="dark">
          LAUNCH APP
        </Button>
      </div>
    </Navbar>
  );
}

export default NavMenu;
