import React from 'react';
import "./Slider.css";
import pic from "../../assets/pngwing.com.png";
import pic1 from "../../assets/pngwing.com (1).png";
import pic2 from "../../assets/pngwing.com (2).png";
import pic3 from "../../assets/pngwing.com (3).png";
import pic4 from "../../assets/pngwing.com (4).png";
import pic5 from "../../assets/pngwing.com (5).png";

const cardData = [
  { imgSrc: pic, title: 'DRESS & FROCK' },
  { imgSrc: pic1, title: 'FLASH' },
  { imgSrc: pic2, title: 'PHONE CASES' },
  { imgSrc: pic3, title: 'POWER BANK' },
  { imgSrc: pic4, title: 'PHONE CHARGES' },
  { imgSrc: pic5, title: 'KIT' },
  { imgSrc: pic5, title: 'KIT' },

  
];

export default function Slider() {
  return (
    <div className="center mx-auto container">
      <div className="slider">
        <div className="cards">
          {cardData.map((card, index) => (
            <div key={index} className="card flex flex-row">
              <div className='bg-zinc-200 p-2 rounded-md border-1 border-black shadow-md'>
                <img src={card.imgSrc} width={70} height={70} alt={`Card ${index}`} />
              </div>
              <div className='flex flex-col h-full justify-evenly'>
                <div className="subtitle">{card.title}</div>
                <p className='text-sm text-[#f5c518]' >Show All</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
