import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/CartSystem';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const [priceall, setPriceAll] = useState(0);
  const [shipping, setShipping] = useState(8);
  const [cartsitem, setCartItem] = useState(null);
  const [price, setprice] = useState(0)
  const [total, settotal] = useState(0);
  const [orders, setorders] = useState(null);
  const [form, setform] = useState(false)
  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const { carts } = useSelector(item => item.favorite);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userResponse = await axios.get('http://localhost:4000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(userResponse.data.user);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [user]);


  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const userId = user._id; // Assuming user is defined somewhere in your component
        const response = await axios.get(`http://localhost:4000/api/auth/${userId}/cart`);
        setCartItem(response.data)
        setprice(response.data.totalPrice)
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
  
    fetchData1()
  
  
  },)
    

  const handleRemoveFromCart = async (item) => {
    dispatch(RemoveFromCart(item));
    const itemId = item._id;
    try {
      const response = await axios.delete(`http://localhost:4000/api/auth/${user._id}/cart/remove/${itemId}`);
      if (response.status === 200) {
        toast.success("Item Removed From The Cart");
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error || "An error occurred");
    }
  };

  useEffect(() => {
    settotal(price + shipping);
  }, [price, priceall]);

  const handleOrder = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:4000/api/order`, { orders });
      if (response.status === 200) {
        toast.success("Item added to Cart");
      }
    } catch (error) {
      console.log(error.response.data.error)
      toast.error(error.response.data.error || "An error occurred");
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/api/order`, {
        products: carts, // Assuming 'carts' contains the products in the cart
        userId: user._id,
        totalPrice: total,
        shippingAddress,
        phoneNumber
      });
      if (response.status === 200) {
        toast.success("Order placed successfully");
      }
    } catch (error) {
      console.log(error.response.data.error)
      toast.error(error.response.data.error || "An error occurred");
    }
  };
  


  return (
    <div className="h-screen realtive bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      {cartsitem && cartsitem.products && cartsitem.products.length > 0 ? (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            { cartsitem.products.length > 0 && cartsitem.products.map((item) => {
              return (
                <div key={item._id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <div className="flex items-center justify-center">
                    <img src={"http://localhost:4000/" + item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  </div>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.price}$</p>
                        <svg onClick={() => { handleRemoveFromCart(item) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div  className="  mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg text-right font-bold">${total}</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button type='button' onClick={() => { setShowForm(true) }} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            {showForm && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
    <form onSubmit={handleSubmitOrder} className="animate__animated animate__fadeIn w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <input 
        type="text" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        placeholder="Phone Number" 
        required 
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
      />
      <input 
        type="text" 
        value={shippingAddress} 
        onChange={(e) => setShippingAddress(e.target.value)} 
        placeholder="Shipping Address" 
        required 
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
      />
      <div className="flex justify-around">
        <button 
          type="submit" 
          className="w-1/4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Place Order
        </button>
        <button
        type='reset'
          onClick={() => setShowForm(false)} 
          className="w-1/4 bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

          </div>
            
        </div>) : <div className='flex flex-col  items-center justify-center'>
        <span className="material-symbols-outlined my-8 relative z-2 text-7xl cursor-pointer">
          shopping_bag</span>
        <p className='my-3  ' > No items yet? Continue shopping to explore more.
        </p>
        <Link className="bg-[#f5c518] p-4 text-white rounded-lg" to={"/"}>Explore Items
        </Link>
      </div>}
    </div>
  )
}
