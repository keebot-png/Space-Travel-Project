import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import Rocket from './pages/Rocket';

import './style/app.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
