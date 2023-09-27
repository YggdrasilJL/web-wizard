import { useState, useEffect } from 'react';
// components
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/projects',
      element: <Project />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Home />,
    },
  ]);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      id="app"
      className={`fade-in ${
        visible
          ? 'opacity-100, filter brightness-100'
          : 'opacity-0, filter brightness-0'
      }`}
    >
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
