import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const resumePDF = 'src/assets/jacob-resume.pdf';
  return (
    // removing bottom-0 stops it from clipping over other elements
    <div className="flex text-white h-20">
      <div className=" justify-between items-center bg-gradient-to-b from-transparent to-opacityPurple p-4 flex gap-x-5 w-full sm:absolute bottom-0">
        <p className="ml-4">&copy; Jacob Lowther's Portfolio</p>
        <a href={resumePDF} download="jacob-resume.pdf">
          <button className=" w-32 hover:w-40 h-12 hover:h-14 hover:text-white hover:border-white hover:scale-110 duration-300 text-magenta border border-magenta p-2 rounded-lg">
            Resume
          </button>
        </a>
        <div className="flex gap-x-6 mr-4 items-center">
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
    </div>
  );
};

export default Footer;
