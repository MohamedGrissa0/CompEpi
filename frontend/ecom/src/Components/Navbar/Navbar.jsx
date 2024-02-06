import React from 'react'
import "../../index"
import "./Navbar.css"
import a from "../../assets/social.png"
import b from "../../assets/logos.png"
import c from "../../assets/youtube.png"
import d from "../../assets/Q9LI1gluCTECYiY4KxCOYDPRRAzGdMGVHiR2n2SW.png"

import { useState } from 'react'

export default function Navbar() {
  const [open,setopen] = useState(false)
  return (

<div className='flex flex-col '>
<div class="md:flex flex-row hidden  items-center w-full justify-around  p-4">
<div className='flex flex-row items-center justify-between space-x-3'>
<img src={a} width={30} height={20} />
<img src={b} width={30} height={20} />
<img src={c} width={30} height={20} />

</div>

<p><b>Free Shipping - </b>This Week Order Over - $55</p>
<p></p>
    </div>
    <hr className='text-black text-2xl border-black border-1'></hr>

<div class="navbar border-gray-200 text-black">
  <div class=" flex flex-wrap items-center justify-around  p-4">
  <a href="/" class=" flex items-center font space-x-3 rtl:space-x-reverse">
      <span class="self-center  text-2xl font-semibold whitespace-nowrap text-black">WolfTech</span>
  </a>
  <div class="flex">
    
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" width={500} class="block w-[500px]  p-3 px-15 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button
  data-collapse-toggle="navbar-search"
  type="button"
  className="inline-flex items-center p-2 relative w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
  aria-controls="navbar-search"
  aria-expanded="false"
  onClick={()=>{
    setopen(!open)
  }}
>
  <span className="sr-only">Open main menu</span>
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
  {open && <div data-aos="fade-left" className="absolute top-14 w-[65vw] h-screen text-[#f5c518]  flex flex-col items-center z-[99]  bg-[#fff] border border-gray-200 rounded-lg shadow-lg">
<div>
  <img src={d} width={150} alt=''/>
</div>
    <ul className="flex flex-col h-max w-full items-center ">
      <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white cursor-pointer transition duration-300">
        Home
      </li>
      <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
        Categories
      </li>
      <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
        About
      </li>
      <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
        Contact Us
      </li>
     <li className='flex '>
     <li className="py-4 hover:bg-[#f5c518]  rounded-lg hover:text-white flex items-center p-4   cursor-pointer transition duration-300">
        <span className="material-symbols-outlined text-3xl cursor-pointer">
          person
        </span>
        Login
      </li>
      <li className="py-4 hover:bg-[#f5c518]  rounded-lg hover:text-white  flex items-center p-4   cursor-pointer transition duration-300">
        <span className="material-symbols-outlined text-3xl relative z-2 cursor-pointer">
          shopping_bag
        </span>
        Cart
      </li>
     </li>
    </ul>
  </div>}
</button>

  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" width={500} class="block w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <div className=' px-8 space-x-2 w-full'>
  <span className="material-symbols-outlined text-3xl cursor-pointer">
    person
  </span>
  <span className="material-symbols-outlined text-3xl relative z-2 cursor-pointer">
    shopping_bag
  </span>
</div>

    </div>
  </div>
</div>
</div>

  )
}
