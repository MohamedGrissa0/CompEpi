import React from 'react'
import './Products.css'
import a from '../../assets/phone-pic/phone.png'
function Products() {
  return (
    <div className="container-products">
        <div className="product-title">
            <p>New Arrivals</p>
            <p>Popular</p>
            <p>Top Reated</p>
        </div>
<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
 <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" style={{ height: '27rem', cursor: 'pointer' }}>
    <img srcset={a} class="w-full h-auto max-w-xl rounded-lg" alt="image description" className="pic-card" />   
    <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="hover-content flex-1 truncate">
            <div>
            <h3 class="truncate text-sm font-medium text-gray-900" sx={{position:'absolute', marginTop:'24%', marginBottom:'3%'}}>Iphone 11</h3>
            <p class="mt-1 truncate text-sm text-gray-500"  sx={{marginTop:'-4%'}}>
                Color: gray, gold, blue.<br />
                Battery: 45500mAh.<br />
                Stock: in stock.<br />
                Price: $300.
            </p>
        </div>
        </div>
    </div>

</li>
<li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" style={{ height: '27rem', cursor: 'pointer' }}>
    <img srcset={a} class="w-full h-auto max-w-xl rounded-lg" alt="image description" className="pic-card" />   
    <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="hover-content flex-1 truncate">
            <div>
            <h3 class="truncate text-sm font-medium text-gray-900" sx={{position:'absolute', marginTop:'24%', marginBottom:'3%'}}>Iphone 11</h3>
            <p class="mt-1 truncate text-sm text-gray-500"  sx={{marginTop:'-4%'}}>
                Color: gray, gold, blue.<br />
                Battery: 45500mAh.<br />
                Stock: in stock.<br />
                Price: $300.
            </p>
        </div>
        </div>
    </div>

</li>
</ul>


    </div>
  )
}

export default Products
