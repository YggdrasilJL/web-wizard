import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-[25vh] flex flex-col sm:flex-row md:justify-around">
        <p className="text-white text-2xl max-w-3xl text-center mt-36">
          Hey! My name is Jacob, and I'm a{' '}
          <span className="text-3xl animate-pulse duration-1000 text-lightGreen hover:animate-none">
            Frontend Engineer
          </span>{' '}
          with a passion for designing and creating things with code. While I
          may be new to the field, I am eager to learn and grow in this exciting
          industry. My favourite technologies to work with would be{' '}
          <span className="text-3xl animate-pulse duration-1000 text-reactColor hover:animate-none">
            React.js
          </span>{' '}
          and{' '}
          <span className="text-3xl animate-pulse duration-1000 text-tailwColor hover:animate-none">
            Tailwind CSS
          </span>{' '}
          I take pride in my unique ability to balance both analytical and
          creative thinking making this the perfect career for me!
        </p>
        <img
          src="src\assets\jacob-image.png"
          alt="Picture of Jacob"
          width={350}
        />
      </div>
    </div>
  );
};

export default Home;
