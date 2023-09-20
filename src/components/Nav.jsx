import React from 'react';
import {
  FaHouseUser,
  FaUserAstronaut,
  FaPalette,
  FaMailBulk,
} from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="flex gap-x-3 text-white">
      <a href="" className="flex items-center justify-center align-baseline">
        <FaHouseUser className="mx-1" /> Home
      </a>
      <a href="" className="flex items-center justify-center align-baseline">
        <FaUserAstronaut className="mx-1" /> About
      </a>
      <a href="" className="flex items-center justify-center align-baseline">
        <FaPalette className="mx-1" /> Projects
      </a>
      <a href="" className="flex items-center justify-center align-baseline">
        <FaMailBulk className="mx-1" /> Contact
      </a>
    </div>
  );
};

export default Nav;
