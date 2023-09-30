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
      img: 'src/assets/mapbrew.png',
      link: 'https://mapbrew-websitee-20a575919a4b.herokuapp.com/login',
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col items-center gap-y-10 mt-10 min-h-screen">
        <h1 className="text-5xl">Projects:</h1>
        <div>
          {projectList.map(({ id, name, desc, img, link }) => (
            <div key={id}>
              <a href={link} target="_blank">
                <div className="flex w-fit p-4 rounded-xl border hover:scale-105 hover:shadow-xl hover:shadow-opacityMagenta hover:bg-opacityMagenta  duration-700">
                  <img src={img} width={200} className="rounded-lg" />
                  <div className="p-3">
                    <h3 className="text-2xl mb-2">{name}</h3>
                    <p className="max-w-md text-gray-400">{desc}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h2 className="text-4xl text-center mb-8">
            Technologies I've worked with:
          </h2>
          <div className="flex gap-5">
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
