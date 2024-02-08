import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hp from './Page/Hp';
import PP from './Components/PP/PP';
import Dashboard from './Page/Dashboard/Dashboard';
import { OpenProvider } from './Page/Dashboard/Components/Context.js';

export default function App() {
  return (
    <OpenProvider>

    <Router>
      <Routes>
        <Route exact path="/" element={<Hp />} />
        <Route exact path="/p" element={<PP />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
    </OpenProvider>

  );
}
