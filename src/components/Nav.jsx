import React, { useState, useEffect } from 'react';

import {
  FaHouseUser,
  FaUserAstronaut,
  FaPalette,
  FaMailBulk,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import { A } from '@patched/hookrouter';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const navs = [
    {
      id: 1,
      icon: <FaHouseUser className="mx-1" />,
      text: 'Home',
      link: '/',
    },
    {
      id: 2,
      icon: <FaUserAstronaut className="mx-1" />,
      text: 'About',
      link: '/about',
    },
    {
      id: 3,
      icon: <FaPalette className="mx-1" />,
      text: 'Projects',
      link: '/projects',
    },
    {
      id: 4,
      icon: <FaMailBulk className="mx-1" />,
      text: 'Contact',
      link: '/contact',
    },
  ];

  return (
    // loop over an array of objects instead of copy and pasting a ton
    <div className="z-50">
      <ul className="gap-x-5 text-2xl text-white hidden sm:flex mr-4">
        {navs.map(({ id, icon, text, link }) => (
          <li
            className="flex items-center justify-center cursor-pointer hover:scale-125 hover:text-magenta duration-500"
            key={id}
          >
            <A href={link} className="flex">
              {' '}
              {icon} {text}{' '}
            </A>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-white cursor-pointer pr-3 sm:hidden"
      >
        {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
      </div>
      {nav && (
        <div className="z-50">
          <ul className="text-6xl sm:hidden gap-y-12 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-opacityBlack to-opacityLightBlack">
            {navs.map(({ id, icon, text, link }) => (
              <li
                className="text-white text-4xl flex items-center justify-center cursor-pointer hover:scale-125 duration-500"
                key={id}
              >
                <A href={link} className="flex">
                  {' '}
                  {icon} {text}{' '}
                </A>
              </li>
            ))}
            <FaTimes
              size={35}
              onClick={() => setNav(!nav)}
              className="text-white absolute top-7 right-6 cursor-pointer"
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
