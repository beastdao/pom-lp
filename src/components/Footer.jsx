import React from 'react';
import { Footer } from 'flowbite-react';
import Logo from '../assets/POM-LOGO.png';
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

function FooterNav() {
  return (
    <Footer container className="bg-pom-white">
      <div className="flex flex-row w-full justify-between items-center p-4">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Footer.Brand
            href="https://app.pom.cards"
            src={Logo}
            alt="PoM Logo"
            name="PoM"
          />
          {/* Links */}
          <div className="flex space-x-4">
            <a
              href="https://drive.google.com/file/d/1nQ0Zrc218dltS4_VLLozjO6Scq_EofOB/view?usp=sharing"
              className="text-sm text-gray-500 hover:underline"
            >
              TOS
            </a>
            <a
              href="mailto: pomcardsnft@gmail.com"
              className="text-sm text-gray-500 hover:underline"
            >
              CONTACT US
            </a>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com/pomcards" className="text-gray-500 hover:text-gray-800">
            <FaXTwitter size={20} />
          </a>
          <a href="https://discord.gg/McqF7vyCWx" className="text-gray-500 hover:text-gray-800">
            <FaDiscord size={20} />
          </a>
        </div>
      </div>
    </Footer>
  );
}

export default FooterNav;
