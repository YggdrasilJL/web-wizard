import React, { useState, useEffect } from 'react';
import {
  FaHouseUser,
  FaUserAstronaut,
  FaPalette,
  FaMailBulk,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const navs = [
    {
      id: 1,
      icon: <FaHouseUser className="mx-1" />,
      text: 'Home',
    },
    {
      id: 2,
      icon: <FaUserAstronaut className="mx-1" />,
      text: 'About',
    },
    {
      id: 3,
      icon: <FaPalette className="mx-1" />,
      text: 'Projects',
    },
    {
      id: 4,
      icon: <FaMailBulk className="mx-1" />,
      text: 'Contact',
    },
  ];

  return (
    // loop over an array of objects instead of copy and pasting a ton
    <div>
      <ul className="gap-x-3 text-white hidden sm:flex">
        {navs.map(({ id, icon, text }) => (
          <li
            className="flex items-center justify-center cursor-pointer hover:scale-125 duration-500"
            key={id}
          >
            {icon} {text}
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
        <ul className=" text-6xl sm:hidden gap-y-12 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-opacityBlack to-opacityLightBlack">
          {navs.map(({ id, icon, text }) => (
            <li
              className="text-white text-4xl flex items-center justify-center cursor-pointer hover:scale-125 duration-500"
              key={id}
            >
              {icon} {text}
            </li>
          ))}
          <FaTimes
            size={35}
            onClick={() => setNav(!nav)}
            className="text-white absolute top-7 right-6 cursor-pointer"
          />
        </ul>
      )}
    </div>
  );
};

export default Nav;
