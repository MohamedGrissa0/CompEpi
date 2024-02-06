import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hp from './Page/Hp';
import PP from './Components/PP/PP';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Hp />} />
        <Route exact path="/p" element={<PP />} />
      </Routes>
    </Router>
  );
}
