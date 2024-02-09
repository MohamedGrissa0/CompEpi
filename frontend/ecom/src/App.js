import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hp from './Page/Hp';
import PP from './Components/PP/PP';
import Dashboard from './Page/Dashboard/Dashboard';
import { OpenProvider } from './Page/Dashboard/Components/Context.js';
import Orders from './Page/Dashboard/Components/Orders.jsx';
import Customers from './Page/Dashboard/Components/Customers.jsx';
import Products from './Page/Dashboard/Components/Products.jsx';
import Categories from './Page/Dashboard/Components/Categories.jsx';
import Allps from './Page/Dashboard/Components/Allps.jsx';
import AddCategory from './Page/Dashboard/Components/AddCategory.jsx';

export default function App() {
  return (
    <OpenProvider>

    <Router>
      <Routes>
        <Route exact path="/" element={<Hp />} />
        <Route exact path="/p" element={<PP />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/Customers" element={<Customers />} />
        <Route exact path="/add-Products" element={<Products />} />
        <Route exact path="/Products" element={<Allps />} />
        <Route exact path="/add-Category" element={<AddCategory />} />

        <Route exact path="/Categories" element={<Categories/>} />
      </Routes>
    </Router>
    </OpenProvider>

  );
}
