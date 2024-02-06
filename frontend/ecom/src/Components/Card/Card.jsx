import React from 'react'
import "./Card"
export default function Card(props) {
  return (
    <div class="wrapper shadow-lg">
    <div class="container">
      <div class="top"></div>
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
          </div>
          <div class="buy"><i class="material-icons">add_shopping_cart</i></div>
        </div>
        <div class="right">
          <div class="done"><i class="material-icons">done</i></div>
          <div class="details">
            <h1>Chair</h1>
            <p>Added to your cart</p>
          </div>
          <div class="remove"><i class="material-icons">clear</i></div>
        </div>
      </div>
    </div>
    
  </div>
  )
}