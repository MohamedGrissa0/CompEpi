import React, { useRef , useState , useEffect } from 'react';
import axios from 'axios';
import './Slider.css';
import pic from '../../assets/pngwing.com.png';
import pic1 from '../../assets/pngwing.com (1).png';
import pic2 from '../../assets/pngwing.com (2).png';
import pic3 from '../../assets/pngwing.com (3).png';
import pic4 from '../../assets/pngwing.com (4).png';
import pic5 from '../../assets/pngwing.com (5).png';
import { Link } from 'react-router-dom';


const cardData = [
  { imgSrc: pic, title: 'DRESS & FROCK',link:"/category/iphone" },
  { imgSrc: pic1, title: 'FLASH' },
  { imgSrc: pic2, title: 'PHONE CASES' },
  { imgSrc: pic3, title: 'POWER BANK' },
  { imgSrc: pic4, title: 'PHONE CHARGES' },
  { imgSrc: pic5, title: 'KIT' },
  { imgSrc: pic5, title: 'KIT' },
];

export default function Slider() {



  const [categories, setcategories] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const category = await axios.get("http://localhost:4000/api/category");
              if(category.data.length!==0)
              {
                  setcategories(category.data)
              }
              //console.log(product.data)
          } catch (error) {
              console.error("Error:", error);
          }
      };
      fetchData();
  }, );



  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    const scrollAmount = 200; // Adjust this value based on your design
    const scrollDirection = direction === 'prev' ? -scrollAmount : scrollAmount;
    sliderRef.current.scrollLeft += scrollDirection;
  };

  return (
    <div className="center mx-auto my-5 relative container">
      <div className="slider  " ref={sliderRef} >
        <div className="cards">
          {categories.map((card, index) => (
            <div key={index} className="card flex flex-row">
              <div className='bg-zinc-200 p-2 rounded-md border-1 border-black shadow-md'>
                <img src={"http://localhost:4000/"+card.images[0]} width={70} height={70} alt={`Card ${index}`} />
              </div>
              <div className='flex flex-col h-full justify-evenly'>
                <div className="subtitle">{card.name}</div>
              <Link to={`/category/${card.name}`}>  <p className='text-sm text-[#f5c518]' >Show All</p></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden slider-buttons md:flex items-center">
        <button className='absolute hidden md:block -left-5 text-white  ' onClick={() => moveSlider('prev')}>&#8249;</button>
        <button className='absolute hidden md:block -right-10 ' onClick={() => moveSlider('next')}>&#8250;</button>
      </div> 
    </div>
  );
}
