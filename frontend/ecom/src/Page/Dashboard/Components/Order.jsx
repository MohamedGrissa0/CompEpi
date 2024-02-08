import React, { useState } from 'react';

export default function Order() {
    const [selectedOption, setSelectedOption] = useState("ORDERED");

    const handleClick = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <div className='col-span-12 md:col-span-10 my-2 w-full mx-1 md:mx-0'>
            <div className='flex items-center text-center justify-around w-full mt-2 bg-gray-200 p-2 '>
                <p className={'p-1 relative cursor-pointer' } onClick={() => handleClick('ORDERED')}>ORDERED
                    <span className={`absolute ${selectedOption === 'ORDERED' ? "border border-b-2 border-black w-20 md:w-60 text-center flex self-center bottom-0 mt-2 left-0 md:-left-[70px]" : ""}`}></span>
                </p>
                <p className={'p-1 relative cursor-pointer' } onClick={() => handleClick('DELIVERED')}>DELIVERED
                    <span className={`absolute ${selectedOption === 'DELIVERED' ? "border border-b-2 border-black w-20 md:w-60  text-center flex self-center bottom-0 mt-2 left-1 md:-left-[70px]" : ""}`}></span>
                </p>
                <p className={'p-1 relative cursor-pointer' } onClick={() => handleClick('CANCELLED')}>CANCELLED
                    <span className={`absolute ${selectedOption === 'CANCELLED' ? "border border-b-2 border-black w-20 md:w-60  text-center flex self-center bottom-0 mt-2 left-2 md:-left-[70px]" : ""}`}></span>
                </p>
            </div>
            <div class="overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right  border-collapse	 border-1 border-white">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse	border-b border-white border-1">
            <tr>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Date
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Reference
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Customer
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Address
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Nb items
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-300">
                    Total
                </th>
            </tr>
        </thead>
        { selectedOption === "ORDERED" ?
        <tbody>
            <tr class="border-b border-white border-1">
                <td class="px-6 py-4 border border-gray-300">
                    Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    Silver
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    Laptop
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $2999
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    1
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $2999
                </td>
            </tr>
            <tr class="border-b border-white border-1">
                <td class="px-6 py-4 border border-gray-300">
                    Microsoft Surface Pro
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    White
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    Laptop PC
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $1999
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    1
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $1999
                </td>
            </tr>
            <tr class="border-b border-white border-1">
                <td class="px-6 py-4 border border-gray-300">
                    Magic Mouse 2
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    Black
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    Accessories
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $99
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    1
                </td>
                <td class="px-6 py-4 border border-gray-300">
                    $99
                </td>
            </tr>
        </tbody> : null}
    </table>
</div>

        </div>
    );
}
