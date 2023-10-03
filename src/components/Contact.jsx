import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errorVisible, setErrorVisible] = useState(false);

  const toggleErr = () => {
    setErrorVisible(!errorVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact m-10 sm:m-0 sm:mt-20 p-0 text-white min-h-screen">
      <div className="mx-auto max-w-lg px-6 py-12 border rounded-3xl">
        <h1 className="text-2xl font-bold mb-8 hover:scale-105 hover:text-teal-400 w-fit cursor-default duration-700 hover:shadow-2xl">
          <span className="hover:scale-105 hover:shadow-purple-400 duration-1000">
            Let's connect! :)
          </span>
        </h1>
        <form
          action="https://getform.io/f/8dff03e9-7a0c-4722-9b0d-73e3a013ca93"
          method="POST"
          id="form"
          noValidate
          // onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none
               focus:outline-none focus:ring-0 focus:border-aqua border-gray-200"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Name
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Name is required
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none
               focus:outline-none focus:ring-0 focus:border-aqua border-gray-200"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label
              htmlFor="email"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Email
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Email address is required
            </span>
          </div>

          <div className="relative z-0 w-full mb-5">
            <textarea
              name="message"
              placeholder=" "
              required
              rows={5}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none
               focus:outline-none focus:ring-0 focus:border-aqua border-gray-200"
              value={formData.message}
              onChange={handleInputChange}
            />
            <label
              htmlFor="message"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >
              Message
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Message is required
            </span>
          </div>

          <button
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-300 ease-linear rounded-lg
             shadow outline-none bg-darkPurple hover:outline-1 hover:outline-lightAqua hover:bg-magenta hover:scale-105 hover:shadow-lg focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
