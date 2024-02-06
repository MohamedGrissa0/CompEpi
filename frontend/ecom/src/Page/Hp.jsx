import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'
import Box from '../Components/box/Box'
import Products from '../Components/Products/Products'
import MenuBar from '../Components/Menu/MenuBar'
import Categories from '../Components/Categories/Categories'
import Footerb from '../Components/Footer/Footerb/Footerb'

export default function 
() {
  return (
    <div>
        <Navbar />
        <Slider/>
        <MenuBar/>
        <Products title="top rated"/>
        <Categories />
        <Products title="top rated"/>
        <Box />
        <Footer/>
        <Footerb/>

    </div>
  )
}
