import React from 'react';

export default function SlideCard(props) {
  return (
    <div className="flex items-center my-1 text-white hover:bg-fuchsia-200  p-2 w-full rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <span className="material-symbols-outlined text-[20px] rounded-lg mx-3 p-2 bg-white shadow-lg text-black">
        {props.icon}
      </span>
      <p className="text-black font-sans text-base md:text-lg">{props.name}</p>
    </div>
  );
}
