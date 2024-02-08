import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../../assets/Q9LI1gluCTECYiY4KxCOYDPRRAzGdMGVHiR2n2SW.png';
import SlideCard from './SlideCard';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex md:block items-center justify-between shadow-lg p-5">
      <div>
        <img src={logo} alt="Logo" width={70} />
      </div>
      <div className="md:hidden cursor-pointer relative" onClick={toggleMenu}>
        <span className="material-symbols-outlined block">menu</span>
        {isOpen && (
          <div
            className="absolute top-0 -right-5 shadow-lg bg-white p-8 h-[60vh] z-[99] w-[250px]"
            data-aos="fade-left"
          >
            <span className="material-symbols-outlined block absolute top-0 right-4">close</span>
            <SlideCard name="Home" icon="store" />
            <SlideCard name="Home" icon="store" />
            <SlideCard name="Home" icon="store" />
            <SlideCard name="Home" icon="store" />
            <SlideCard name="Home" icon="store" />
            <p className="my-5 p-4 text-xs">ACCOUNT PAGES</p>
            <SlideCard name="Profile" icon="person" />
            <SlideCard name="Logout" icon="logout" />
          </div>
        )}
      </div>
    </div>
  );
}
