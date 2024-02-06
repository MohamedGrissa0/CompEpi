import React from 'react';
import Phone from '../../assets/phone-pic/phone.png';
import Products from '../Products/Products';
import big from '../../assets/a.jpg';
import "./MenuBar"

function MenuBar() {
  const containerStyle = {
    backgroundImage: `url(${big})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='g-cover bg-center' >
      <img  className='img' src={big}  />
        {/* Add your content here */}
    </div>
  );
}

export default MenuBar;
