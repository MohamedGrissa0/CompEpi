import React from 'react'
import Phone from '../../assets/phone-pic/phone.png'

function MenuBar() {
  return (
    <>
    <div className="container-menu">
    <ul class="menuBar">
  <li>
    memu 1
    <ul class="submenu">
      <li>Sous-menu 1.1</li>
      <li>Sous-menu 1.2</li>
      <li>Sous-menu 1.2</li>
      <li>Sous-menu 1.2</li>
    </ul>
  </li>
  <li>
    memu 2
    <ul class="submenu">
      <li>Sous-menu 2.1</li>
      <li>Sous-menu 2.2</li>
    </ul>
  </li>
  <li>
    memu 3
    <ul class="submenu">
      <li>Sous-menu 3.1</li>
      <li>Sous-menu 3.2</li>
    </ul>
  </li>
  <li>
    memu 4
    <ul class="submenu">
      <li>Sous-menu 4.1</li>
      <li>Sous-menu 4.2</li>
     
    </ul>
  </li>
  <li>
    memu 5
    <ul class="submenu">
      <li>Sous-menu 5.1</li>
      <li>Sous-menu 5.2</li>
    </ul>
  </li>
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
