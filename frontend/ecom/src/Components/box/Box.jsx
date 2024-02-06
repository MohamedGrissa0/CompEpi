import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Box() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-100 -z-1 rounded-md p-8 lg:grid-cols-3 mt-12 gap-4 mx-auto container shadow-lg'>
      <div className='flex flex-col items-center space-y-4 rounded-2xl' data-aos='fade-right'>
        <p className='p-3 md:p-8 bg-[#f5c518] rounded-full'>
          <span className='material-symbols-outlined text-white text-7xl'>shopping_bag</span>
        </p>
        <p className='font-bold'>FREE DELIVERY</p>
      </div>

      <div className='flex flex-col items-center space-y-4' data-aos='fade-up' data-aos-delay='200'>
        <p className='p-3 md:p-8 bg-[#f5c518] rounded-full'>
          <span className='material-symbols-outlined text-white text-7xl'>high_quality</span>
        </p>
        <p className='font-bold'>HIGH QUALITY</p>
      </div>

      <div className='flex flex-col items-center space-y-4' data-aos='fade-left' data-aos-delay='400'>
        <p className='p-3 md:p-8 bg-[#f5c518] rounded-full'>
          <span className='material-symbols-outlined text-white text-7xl'>package_2</span>
        </p>
        <p className='font-bold'>GREAT PACKAGING</p>
      </div>
    </div>
  );
}
