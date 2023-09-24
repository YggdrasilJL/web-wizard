import { useState, useEffect } from 'react';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';
import './index.css';

function App() {
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
      <Home />
      <Footer />
    </div>
  );
}

export default App;
