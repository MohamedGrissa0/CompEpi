import React from 'react';
import { Link } from "react-router-dom";

export default function SlideCard(props) {
  return (
   <Link to={props.path}>
    <div className="flex items-center my-1 text-white hover:bg-fuchsia-200  p-2 w-full rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <span className="material-symbols-outlined text-[20px] rounded-lg mx-3 p-2 bg-gray-200 shadow-lg text-black">
        {props.icon}
      </span>
      <p className="text-black font-sans text-base md:text-lg">{props.name}</p>
    </div>
   </Link>
  );
}
