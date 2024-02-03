import React from 'react'
import 'animate.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Menu/menuBar.css';
import MenuBar from './Components/Menu/MenuBar';

export default function App() {
  return (
    <div className=''>
      <Navbar />
    </div>
    <div>
      <MenuBar></MenuBar>
    </div>
  )
}
