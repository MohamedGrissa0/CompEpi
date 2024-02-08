import React from 'react'

export default function CardMain(props) {
  return (
    <div className='flex flex-row items-center justify-between rounded-lg shadow-lg p-4 w-80  text-black box  bg-gray-200'>
                <div className='flex flex-col justify-center items-center'>
                <p>{props.name}</p>
                <p className='font-semibold text-xl'>${props.price}</p>
                </div>
                <span className="material-symbols-outlined text-[28px] rounded-lg mx-3 p-2 bg-[#f5c518] shadow-lg  text-white">
        store
      </span>

            </div>  )
}
