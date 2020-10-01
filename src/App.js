import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Router Dog Finder</h1>
      <Home />
    </div>
  );
}

export default App;
