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
  return (
    <div>
      <div className='flex gap-5'>
        {techList.map(({ id, name, src, alt }) => (
          <img key={id} src={src} alt={alt} width={100} />
        ))}
      </div>
      <a
        href="https://mapbrew-websitee-20a575919a4b.herokuapp.com/login"
        target="_blank"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="src\assets\mapbrew.png"
          alt="Mapbrew Haven project"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mapbrew Haven
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            project description
          </p>
        </div>
      </a>
    </div>
  );
};

export default Project;
