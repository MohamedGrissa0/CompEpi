import React from 'react'
import './Products.css'
import Card from '../Card/Card'
function Products(props) {
  return (
    <div className="container-products mx-auto h-auto container  rounded-md   p-4 mt-2">
        <div className="product-title flex justify-center items-center mt-10">
           
            <p className=' border-2 border-black px-10 py-8 flex items-center justify-center hover:bg-black hover:text-white hover:transition-all hover:translate-x-1'>{props.title}</p>
        </div> 
        <ul role="list" class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-5 justify-items-center  ">
        <Card price={250} name="IPHONE XS MAX"  />
        <Card price={250} name="IPHONE XS MAX" />
        <Card price={250} name="IPHONE XS MAX" />
        <Card price={250} name="IPHONE XS MAX" />

</ul>


    </div>
  )
}

export default Products
