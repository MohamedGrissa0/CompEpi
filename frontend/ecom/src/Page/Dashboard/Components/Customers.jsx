import React from 'react'
import Slider from '../Components/Slider'
import Navbar from './Navbar'
import Order from './Order'
import Customer from './Customer'

export default function Customers() {
  return (
   <div>
    <Navbar/>
     <div className='grid grid-cols-12 gap-2 w-full '>
<Slider/>
<Customer/>
    </div>
   </div>
  )
}
