// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './calendar';
import Day from './day';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Calendar />} />
        <Route path="/:day" element={<Day />} />
      </Routes>
    </Router>
  );
}

export default App;