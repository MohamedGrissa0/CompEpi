import React from 'react';
import 'animate.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Menu/menuBar.css';
import MenuBar from './Components/Menu/MenuBar';
import Slider from './Components/Slider/Slider';
import { Slide } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './Components/Page/Page';

export default function App() {
  return (
  
            <div>
              <Navbar/>
              <MenuBar />
              <Slider />
              
              
              
              
            </div>
         
  );
}
