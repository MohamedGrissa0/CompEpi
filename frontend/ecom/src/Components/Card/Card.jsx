import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <div class="wrapper shadow-lg">
      <div className="container" style={{ backgroundImage: `url(https://localhost:4000/${props.bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>      <div class="top"></div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <Link to={"http://localhost:3000/p/" + props.id}><h1>{props.name}</h1></Link>
              <p>{props.price}</p>
            </div>
            <div onClick={props.handleAddToCart} className="buy">
              <i className="material-icons">add_shopping_cart</i>
            </div>
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
