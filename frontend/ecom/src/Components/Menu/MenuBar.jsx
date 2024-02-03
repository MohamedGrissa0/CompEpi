import React from 'react'
import Phone from '../../assets/phone-pic/phone.png'

function MenuBar() {
  return (
    <>
    <div className="container-menu">
      <ul className="menuBar">
        <li>memu 1</li>
        <li>memu 2</li>
        <li>memu 3</li>
        <li>memu 4</li>
        <li>memu 5</li>
      </ul>
    </div>
    <div className="center-screen">
      <div className="landing-page-container">
        <div className="container-message">
            <p className="text1">Buy Your Phone Now</p>
            <p className="text2">Next-Level Mobile Innovation </p>
            <p className="text3">Shop Now</p>
            <button className="button-book"> <span>Book Now !</span></button>
        </div>
      </div>
      <img src={Phone} alt='' className="landing-pic"></img> 
    </div>
    </>
  )
}

export default MenuBar
