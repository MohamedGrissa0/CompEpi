import React from 'react'

export default function Box() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 h-[30vh] gap-4 mx-auto mt-80 container'>
            <div className='flex flex-col items-center space-y-4 rounded-2xl  ' >
                <p className='p-10 bg-[#f5c518] rounded-full'>
                    <span class="material-symbols-outlined text-white text-7xl">
                        shopping_bag
                    </span>
                </p>
                <p className='font-bold'>FREE DELIEVERY
                </p>
              

            </div>
            <div className='flex flex-col items-center  space-y-4'>
                <p className='p-10 bg-[#f5c518] rounded-full'>
                    <span class="material-symbols-outlined text-white text-7xl">
high_quality
                </span>
                </p>
                <p className='font-bold'>HIGH QUALITY
                </p>
            </div>

            <div className='flex flex-col items-center space-y-4'>
                <p className='p-10 bg-[#f5c518] rounded-full'>
                    <span class="material-symbols-outlined text-white text-7xl">
package_2
</span>                  
                </p>
                <p className='font-bold'>GREAT PACKAGING
                </p>
            </div>


        </div>
    )
}
