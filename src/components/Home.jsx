import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex absolute z-20 pointer-events-none">
        <iframe src="https://giphy.com/embed/xYaF6AN3tSdb7Ml9UI"></iframe>
      </div>
      <div className="mt-[25vh] flex flex-col sm:flex-row md:justify-around md:flex-row intro">
        <div className="flex flex-col items-center mt-10 p-3">
          <div className=" text-7xl -z-10">
            <h1 className="z-10 font-bold text-aqua name text-center">
              JACOB LOWTHER
            </h1>
          </div>
          <p className="text-white text-2xl max-w-4xl text-center mt-16">
            <span className="text-4xl text-lightAqua">Frontend Engineer</span>{' '}
            with experience in backend development as well. I am always eager to
            learn and grow in this exciting industry because I have a strong
            passion for designing and creating things with code. My favourite
            technologies to work with would be{' '}
            <span className="text-3xl animate-pulse duration-1000 text-aqua hover:animate-none">
              React
            </span>{' '}
            and{' '}
            <span className="text-3xl animate-pulse duration-1000 text-aqua hover:animate-none">
              Tailwind
            </span>
            , I take pride in my unique ability to balance both analytical and
            creative thinking making software development the perfect career for me!
          </p>
        </div>
        <img
          className="object-cover"
          src="src\assets\manCodingOnPlanet.png"
          alt="Picture of man coding on top of a planet"
          width={400}
        />
      </div>
    </div>
  );
};

export default Home;
