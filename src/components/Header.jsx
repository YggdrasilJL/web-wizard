import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed  w-full p-3">
      <div className="flex justify-center items-center gap-3">
        <a href="https://historycooperative.org/yggdrasil/" target="_blank">
          <img
            src="src/assets/3.svg"
            alt="The tree of Yggdrasil from Norse Mythology"
            width={60}
          />
        </a>
        <h1 className="font-signature text-5xl text-white">Jacob</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
