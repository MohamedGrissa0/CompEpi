import React from 'react';
import SlideCard from './SlideCard';
import axios from 'axios';

export default function Slider() {
  const handleLogout = async () =>
{
  try {
    const response = await axios.post("http://localhost:4000/api/auth/logout");

    if (response.status === 200) {
      localStorage.removeItem("token");
      alert("Successful Logout");
        window.location.href = '/login';
    } else {
        alert('Wrong email or password');
    }
} catch (error) {
    console.log(error);
    alert('An error occurred');
}
}
  return (
    <div className="h-screen col-span-2 py-4 shadow-lg rounded-lg bg-white  hidden md:flex flex-col m-2 ">


    <SlideCard name="Home" icon="store"  path="/dashboard"/>
    <SlideCard name="Orders" icon="attach_money" path="/orders"/> 
    <SlideCard name="Customers" icon="person" path="/Customers" />
    <SlideCard name="products" icon="inventory_2" path="/Products" />
    <SlideCard name="Categories" icon="category" path="/Categories" />
    <p className='my-5 p-4 text-xs'>ACCOUNT PAGES</p>
    <SlideCard name="Profile" icon="person" path="/profil" />
    <SlideCard name="Logout" icon="logout" handleLogout={handleLogout} />


    </div>
  );
}
