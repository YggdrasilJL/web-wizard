import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header flex justify-between items-center fixed  w-full p-3">
      <div>
        <h1 className="font-signature text-5xl">Jacob</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
