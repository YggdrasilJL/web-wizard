import React from 'react';

const Project = () => {
  const techList = [
    {
      id: 1,
      name: 'HTML',
      src: 'assets/tech/html.png',
      alt: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
      src: 'assets/tech/css.png',
      alt: 'CSS',
    },
    {
      id: 3,
      name: 'JavaScript',
      src: 'assets/tech/javascript.png',
      alt: 'JavaScript',
    },
    {
      id: 4,
      name: 'Node.js',
      src: 'assets/tech/node.png',
      alt: 'Node JS',
    },
    {
      id: 5,
      name: 'React.js',
      src: 'assets/tech/react.png',
      alt: 'React JS',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      src: 'assets/tech/tailwind.png',
      alt: 'Tailwind CSS',
    },
  ];

  const projectList = [
    {
      id: 1,
      name: 'Mapbrew Haven',
      desc: 'Mapbrew Haven is your go-to tool for tabletop RPG maps. Craft and download your own maps to add a personalized touch to your sessions!',
      img: 'assets/portfolio/mapbrew.png',
      link: 'https://mapbrew-websitee-20a575919a4b.herokuapp.com/login',
      repo: 'https://github.com/YggdrasilJL/mapbrew-haven',
    },
    {
      id: 2,
      name: 'Cosmic Cocktails',
      desc: 'Cosmic Cocktails is a unique platform that mixes astrology with mixology. Discover a surprise cocktail tailored to your zodiac sign with each click!',
      img: 'assets/portfolio/cosmic-cocktails.png',
      link: 'https://graycoded.github.io/cosmic-cocktail-2.0',
      repo: 'https://github.com/YggdrasilJL/cosmic-cocktails',
    },
    {
      id: 3,
      name: 'God Of War Quiz',
      desc: 'A fun quiz to test your knowledge of the God Of War 2018 game.',
      img: 'assets/portfolio/god-of-war.png',
      link: 'https://yggdrasiljl.github.io/04-challenge-quiz/',
      repo: 'https://github.com/YggdrasilJL/04-challenge-quiz',
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      desc: 'A weather dashboard that uses the OpenWeatherMap API to display current weather data and forecast for a given location.',
      img: 'assets/portfolio/weather-app.png',
      link: 'https://yggdrasiljl.github.io/weather-app/',
      repo: 'https://github.com/YggdrasilJL/weather-app',
    },
    {
      id: 5,
      name: 'SVG Creator',
      desc: 'A simple and straightforward tool that empowers you to effortlessly create custom SVG images from the command line using inquirer.',
      img: 'assets/portfolio/svg-creator.png',
      link: 'https://github.com/YggdrasilJL/svgCreator-NODEJS',
    },
    {
      id: 6,
      name: 'Social Network API',
      desc: 'A social network API that has been built to handle large amounts of unstructured data efficiently using MongoDB, Mongoose and Express.js.',
      img: 'assets/portfolio/social-api.png',
      link: 'https://github.com/YggdrasilJL/nauseous-NoSQL',
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col items-center gap-y-10 mt-10 min-h-screen">
        <h1 className="text-5xl">Projects:</h1>
        <div className="flex flex-col gap-4">
          {projectList.map(({ id, name, desc, img, link, repo }) => (
            <div
              key={id}
              className="mx-10 sm:w-auto flex p-4 rounded-xl border hover:scale-105 hover:shadow-xl hover:shadow-opacityMagenta hover:bg-opacityMagenta  duration-700"
            >
              <a href={link} target="_blank">
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={img}
                    width={200}
                    className="rounded-lg object-contain"
                  />
                  <div className="p-3">
                    <h3 className="text-2xl mb-2">{name}</h3>
                    <p className="max-w-md text-gray-400">{desc}</p>
                  </div>
                </div>
              </a>
              {repo ? (
                <a
                  href={repo}
                  target="_blank"
                  className="text-magenta border border-magenta w-fit h-fit p-2 rounded-lg"
                >
                  <p>Code</p>
                </a>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h2 className="text-4xl text-center mb-8">
            Technologies I've worked with:
          </h2>
          <div className="flex gap-5 flex-col sm:flex-row items-center">
            <div className="flex gap-5 sm:mb-20 items-center">
              {/* unused name variable, might add in future */}
              {techList.slice(0, 3).map(({ id, name, src, alt }) => (
                <img
                  className="object-contain"
                  key={id}
                  src={src}
                  alt={alt}
                  width={80}
                />
              ))}
            </div>
            <div className="flex gap-5 mb-20 items-center">
              {techList.slice(3, 6).map(({ id, name, src, alt }) => (
                <img
                  className="object-contain"
                  key={id}
                  src={src}
                  alt={alt}
                  width={80}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
