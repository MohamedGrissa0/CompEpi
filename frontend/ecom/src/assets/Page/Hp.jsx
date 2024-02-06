import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import MenuBar from '../Components/Menu/MenuBar'
import Products from '../Components/Products/Products'
import Categories from '../Components/Categories/Categories'
import Box from '../Components/box/Box'
import Footer from '../Components/Footer/Footer'
import Footerb from '../Components/Footer/Footerb/Footerb'

export default function Hp() {
  return (
<div className='overflow-x-hidden'>
                <Navbar/>              <Slider />

              <MenuBar
              />
              
              <Products title="Top Reated"/>
              <Categories/>
              <Products title="Top Reated"/>

              <Box/>

              <Footer/>
              <Footerb/>
              
            </div>  )
}
