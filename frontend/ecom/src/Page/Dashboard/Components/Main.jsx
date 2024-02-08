import React, { useRef } from 'react';
import CardMain from './CardMain';



export default function Main() {

    
  return (
    <div className='col-span-12 md:col-span-10 my-2   w-full '>
      <div className='flex flex-col md:flex-row items-center  w-[100%] gap-4 justify-center flex-wrap py-4 '>
        <CardMain name="Revenue" price="50,000" />
        <CardMain name="Revenue" price="50,000" />
        <CardMain name="Revenue" price="50,000" />
        <CardMain name="Revenue" price="50,000" />
        
        
      </div>

      
   
<div className='grid grid-cols-12 gap-4 md:gap-4'>

<div class="relative overflow-x-auto col-span-12 md:col-span-8   shadow-lg p-4  bg-gray-200  ">
    <p className='p-4 font-bold '>Top Selling Products</p>
    <table class="w-full text-sm text-left rtl:text-right   border-collapse	 border-1 border-white">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse	border-b border-white border-1">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-white border-1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="border-b border-white border-1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="border-b border-white border-1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className='col-span-12 md:col-span-4 space-y-4 flex flex-col mr-2 shadow-lg p-4 bg-gray-200'>
    <div className='flex flex-row items-center justify-between'>
        <p className='font-bold text-lg'>
            New Customers
        </p>
        <div className='bg-yellow-500 p-3  flex items-center justify-center  rounded  '>
            <span className='material-icons  text-white flex self-center text-center'>
                person_add
            </span>
        </div>
    </div>
    <table className='w-full text-sm text-left rtl:text-right border-collapse border-1 border-white'>
        <thead className='text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1'>
            <tr>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
            </tr>
        </thead>
        <tbody>
        <tr className='text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1'>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" className="w-8 rounded-full" alt='Customer'/>
                </td>
                <td className="px-6 py-4">
                    Silver
                </td>
            </tr>
            <tr className='text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1'>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" className="w-8 rounded-full" alt='Customer'/>
                </td>
                <td className="px-6 py-4">
                    Silver
                </td>
            </tr>
            <tr className='text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1'>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" className="w-8 rounded-full" alt='Customer'/>
                </td>
                <td className="px-6 py-4">
                    Silver
                </td>
            </tr>
            <tr className='text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1'>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" className="w-8 rounded-full" alt='Customer'/>
                </td>
                <td className="px-6 py-4">
                    Silver
                </td>
            </tr>
        </tbody>
    </table>
</div>


  




</div>


    </div>
  );
}
