import React from 'react';
import d from "../../assets/pexels-photo-697509.webp";

export default function Review() {
  return (
    <div className='flex items-center shadow-lg bg-gray-200 text-black    p-4 rounded-md'>
      <div className='flex-shrink-0 mr-4 flex items-center flex-col'>
        <img src={d} alt='' className='rounded-full w-16 h-16 md:w-20 md:h-20 object-cover' />
        <p className='mt-2'>Med Grissa</p>
      </div>
      <p className='text-sm md:text-base'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolor quia officia quo excepturi omnis eveniet fugit, nihil sunt id!
      </p>
    </div>
  );
}
