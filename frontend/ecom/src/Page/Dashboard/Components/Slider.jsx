import React from 'react';
import SlideCard from './SlideCard';

export default function Slider() {
  return (
    <div className="h-screen col-span-2 py-4 shadow-lg rounded-lg bg-white  hidden md:flex flex-col m-2 ">


    <SlideCard name="Home" icon="store"  path="/dashboard"/>
    <SlideCard name="Orders" icon="attach_money" path="/orders"/> 
    <SlideCard name="Customers" icon="person" path="/Customers" />
    <SlideCard name="products" icon="inventory_2" path="/Products" />
    <SlideCard name="Home" icon="store" />
    <p className='my-5 p-4 text-xs'>ACCOUNT PAGES</p>
    <SlideCard name="Profile" icon="person" />
    <SlideCard name="Logout" icon="logout" />


    </div>
  );
}
