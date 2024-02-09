import React from 'react'
import Slider from '../Components/Slider'
import Navbar from './Navbar'

import Allp from './Allp'

export default function Allps() {
  return (
   <div className='realtive  bg-gray-200 h-full'>
    <Navbar/>
     <div className='grid grid-cols-12 gap-0 rounded-md w-full  '>
<Slider/>
<Allp/>


    </div>
    
   </div>
  )
}
