import React from 'react';

const Project = () => {
  const techList = [
    {
      id: 1,
      name: 'HTML',
      src: 'src/assets/tech/html.png',
      alt: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
      src: 'src/assets/tech/css.png',
      alt: 'CSS',
    },
    {
      id: 3,
      name: 'JavaScript',
      src: 'src/assets/tech/javascript.png',
      alt: 'JavaScript',
    },
    {
      id: 4,
      name: 'Node.js',
      src: 'src/assets/tech/node.png',
      alt: 'Node JS',
    },
    {
      id: 5,
      name: 'React.js',
      src: 'src/assets/tech/react.png',
      alt: 'React JS',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      src: 'src/assets/tech/tailwind.png',
      alt: 'Tailwind CSS',
    },
  ];

  const projectList = [
    {
      id: 1,
      name: 'Mapbrew Haven',
      desc: 'Mapbrew Haven is your go-to tool for tabletop RPG maps. Craft and download your own maps to add a personalized touch to your sessions!',
      img: 'src/assets/portfolio/mapbrew.png',
      link: 'https://mapbrew-websitee-20a575919a4b.herokuapp.com/login',
      repo: 'https://github.com/YggdrasilJL/mapbrew-haven',
    },
    {
      id: 2,
      name: 'Cosmic Cocktails',
      desc: 'Cosmic Cocktails is a unique platform that mixes astrology with mixology. Discover a surprise cocktail tailored to your zodiac sign with each click!',
      img: 'src/assets/portfolio/cosmic-cocktails.png',
      link: 'https://graycoded.github.io/cosmic-cocktail-2.0',
      repo: 'https://github.com/YggdrasilJL/cosmic-cocktails',
    },
    {
      id: 3,
      name: 'SVG Creator',
      desc: 'A simple and straightforward tool that empowers you to effortlessly create custom SVG images from the command line using inquirer.',
      img: 'src/assets/portfolio/svg-creator.png',
      link: 'https://github.com/YggdrasilJL/svgCreator-NODEJS',
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
              className=" w-auto flex p-4 rounded-xl border hover:scale-105 hover:shadow-xl hover:shadow-opacityMagenta hover:bg-opacityMagenta  duration-700"
            >
              <a href={link} target="_blank">
                <div className="flex">
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
                <a href={repo} className="text-magenta border border-magenta w-fit h-fit p-2 rounded-lg">
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
          <div className="flex gap-5 mb-20">
            {techList.map(({ id, name, src, alt }) => (
              <img
                className="object-contain"
                key={id}
                src={src}
                alt={alt}
                width={100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
