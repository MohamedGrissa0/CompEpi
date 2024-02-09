import React from 'react'
import Slider from '../Components/Slider'
import Navbar from './Navbar'
import Order from './Order'
import Product from './Product'
import Categorie from './Categorie'

export default function Categories() {
  return (
   <div>
    <Navbar/>
     <div className='grid grid-cols-12 gap-2 w-full bg-gray-200'>
<Slider/>
<Categorie/>
    </div>
   </div>
  )
}
