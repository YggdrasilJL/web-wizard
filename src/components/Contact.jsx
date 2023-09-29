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
    <div className="m-10 sm:m-0 sm:mt-20 p-0 text-white min-h-screen">
      <div className="mx-auto max-w-lg px-6 py-12 border rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Let's connect :)</h1>
        <form id="form" noValidate onSubmit={handleSubmit}>
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
            id="button"
            type="button"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg
             shadow outline-none bg-darkPurple hover:bg-magenta hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
