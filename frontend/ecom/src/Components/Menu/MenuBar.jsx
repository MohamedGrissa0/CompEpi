import React from 'react';
import Phone from '../../assets/phone-pic/phone.png';
import big from "../../assets/a.jpg";

function MenuBar() {
  const containerStyle = {
    backgroundImage: `url(${big})`,
  };

  return (
    <div className='h-[90vh] bg-cover bg-center' style={containerStyle}>
      <div className="container mx-auto">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default MenuBar;
