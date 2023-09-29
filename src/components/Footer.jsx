import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    // removing bottom-0 stops it from clipping over other elements
    <footer className="flex text-white">
      <div className=" justify-between items-center bg-gradient-to-b from-transparent to-opacityPurple p-4 flex gap-x-5 w-full sm:absolute bottom-0">
        <p className="ml-4">&copy; Jacob Lowther's Portfolio</p>
        <div className="flex gap-x-6 mr-4">
          <a
            href="https://github.com/YggdrasilJL/"
            className="hover:scale-125 hover:text-magenta duration-500"
          >
            <FaGithub fontSize={55} />
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-lowther/"
            className="hover:scale-125 hover:text-magenta duration-500"
          >
            <FaLinkedin fontSize={55} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
