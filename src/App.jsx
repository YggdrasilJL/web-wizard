import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
