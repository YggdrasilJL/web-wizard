import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';
import { A, useRoutes } from '@patched/hookrouter';
import './index.css';

function App() {
  const routes = {
    '/': () => <Home />,
    '/about': () => <About />,
    '/projects': () => <Project />,
    '/contact': () => <Contact />,
    '*': () => <NotFound />,
  };
  const AppRoutes = useRoutes(routes);

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
      
      {AppRoutes}
    </div>
  );
}

export default App;
