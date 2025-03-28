'use client';

import React from 'react';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo
} from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-8 mt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Community Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <FaYoutube className="text-xl" />
              <span className="ml-2">Youtube</span>
            </a>
            <a href="https://github.com/Kiarash-m0hammadi">
              <div className="flex items-center mb-3 hover:text-purple-400 transition-colors">
                <RxGithubLogo className="text-xl" />
                <span className="ml-2">Github</span>
              </div>
            </a>
            <a href="https://discord.com/invite/pKrH2eGg">
              <div className="flex items-center mb-3 hover:text-purple-400 transition-colors">
                <RxDiscordLogo className="text-xl" />
                <span className="ml-2">Discord</span>
              </div>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            <a href="#" className="flex items-center mb-3 hover:text-purple-400 transition-colors">
              <RxInstagramLogo className="text-xl" />
              <span className="ml-2">Instagram</span>
            </a>
            <a href="#" className="flex items-center mb-3 hover:text-purple-400 transition-colors">
              <RxTwitterLogo className="text-xl" />
              <span className="ml-2">Twitter</span>
            </a>
            <a href="#" className="flex items-center mb-3 hover:text-purple-400 transition-colors">
              <RxLinkedinLogo className="text-xl" />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg mb-4">About</h3>
            <a href="#" className="mb-3 hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="#" className="mb-3 hover:text-purple-400 transition-colors">
              Contact
            </a>
            <a
              href="mailto:kiarash7.mohammadi@gmail.com"
              className="mb-3 hover:text-purple-400 transition-colors break-all"
            >
              kiarash7.mohammadi@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
          © 2024 Kiarash Mohammadi. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
