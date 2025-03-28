'use client';

import { Socials } from '../../constants/index';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about-me');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll("section[id], div[id='about-me']");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { href: '#about-me', label: 'About me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' }
  ];

  const getLinkClassName = href => {
    const sectionId = href.replace('#', '');
    return `cursor-pointer transition-colors duration-300 ${
      activeSection === sectionId
        ? 'text-purple-500 font-medium'
        : 'text-gray-200 hover:text-purple-400'
    }`;
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </div>
        </button>

        <a href="#about-me" className="h-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Kiarash Mohammadi
          </span>
        </a>

        <div className="hidden md:flex h-full flex-row items-center justify-between flex-1 max-w-[500px] mx-4">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className={getLinkClassName(item.href)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map(social => (
            <a href={social.url} key={social.name}>
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-[65px] left-0 w-full bg-[#030014] backdrop-blur-md transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col p-4 border-t border-[#7042f861]">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`${getLinkClassName(item.href)} py-3 px-4 text-lg`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-row gap-4 mt-4 px-4 py-2">
              {Socials.map(social => (
                <a href={social.url} key={social.name}>
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
