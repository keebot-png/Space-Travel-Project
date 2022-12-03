import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/mission';
import Profile from './pages/profile';
import Rocket from './pages/Rocket';

import './style/app.css';


function App() {
  return (
    <div>
      <NavbarVariable />
    </div>
  );
}

export default App;
