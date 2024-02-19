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
import Profil from './Page/Dashboard/Components/Profil.jsx';
import CategoryPage from './Components/CategoryPage/CategoryPage.jsx';
import Order from './Components/Order/Cart.jsx';
import Cart from './Components/Order/Cart.jsx';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js'; // assuming you have your Redux store configured in this file
import Login from './Components/Login.jsx';
import Register from './Components/Register/Register.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
        <Route exact path="/" element={<Hp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/p/:id" element={<PP />} />
        <Route exact path="/category/:id" element={ <CategoryPage/>} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/Cart" element={<Cart />} />

        <Route exact path="/Customers" element={<Customers />} />
        <Route exact path="/add-Products" element={<Products />} />
        <Route exact path="/Products" element={<Allps />} />
        <Route exact path="/add-Category" element={<AddCategory />} />
        <Route exact path="/profil" element={<Profil />} />

        <Route exact path="/Categories" element={<Categories/>} />
      </Routes>
    </Router>
    <ToastContainer />
    </Provider>

  );
}
