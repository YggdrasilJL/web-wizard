import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-12 items-center overflow-hidden">
        <div className="gap-10 flex flex-col h-screen items-center">
          <h1 className="mt-20 text-white text-center text-7xl">
            Hi, I'm Jacob!
          </h1>
          <img
            src="assets/me.png"
            alt="Photo of Jacob"
            width={350}
            className=" drop-shadow-2xl"
          />
        </div>
        <h2 className="text-white text-center max-w-lg text-2xl sm:text-4xl sm:max-w-6xl mb-96">
          Growing up, I've always had this craving for creating and crafting
          things that bring my weirdest/wildest ideas to life. Diving into the
          world of coding this past year has been invigorating and I have
          discovered my love for problem solving with code.
          <br />
          <br />
          My passion for design and development has been a constant in my life
          journey, although I may be relatively new to the coding scene, I have
          been practicing the most important skills to have as a Software
          Engineer my entire life. I am on an exciting new path as of late,
          pursuing my dream of becoming a Front-End Engineer by taking a
          Full-Stack Development University bootcamp.
        </h2>
      </div>
    </div>
  );
};

export default About;
