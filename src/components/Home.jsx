import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex absolute">
        <iframe src="https://giphy.com/embed/xYaF6AN3tSdb7Ml9UI"></iframe>
      </div>
      <div className="mt-[25vh] flex flex-col sm:flex-row md:justify-around">
        <div className="flex flex-col items-center mt-10">
          <div className=" text-7xl ">
            <h1 className="font-bold text-lightSage name">
              JACOB LOWTHER
            </h1>
          </div>
          <p className="text-white text-2xl max-w-3xl text-center mt-16">
            <span className="text-4xl animate-pulse duration-1000 text-forestGreen hover:animate-none">
              Frontend Engineer
            </span>{' '}
            with experience in backend development as well. I have a strong
            passion for designing and creating things with code. While I may be
            new to the field, I am eager to learn and grow in this exciting
            industry. My favourite technologies to work with would be{' '}
            <span className="text-3xl animate-pulse duration-1000 text-forestGreen  hover:animate-none">
              React
            </span>{' '}
            and{' '}
            <span className="text-3xl animate-pulse duration-1000 text-forestGreen  hover:animate-none">
              Tailwind
            </span>
            , I take pride in my unique ability to balance both analytical and
            creative thinking making this the perfect career for me!
          </p>
        </div>
        <img
          src="src\assets\jacob-imageMORE.png"
          alt="Picture of Jacob"
          width={350}
        />
      </div>
    </div>
  );
};

export default Home;
