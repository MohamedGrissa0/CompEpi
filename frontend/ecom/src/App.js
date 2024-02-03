import React from 'react'
import 'animate.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Menu/menuBar.css';
import MenuBar from './Components/Menu/MenuBar';
import Slider from './Components/Slider/Slider';

export default function App() {
  return (
    <div className='h-full'>
      <Navbar />
      <MenuBar />
        <Slider/>
      </div>
  )
}
