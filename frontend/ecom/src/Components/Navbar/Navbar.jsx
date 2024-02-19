import React, { useEffect } from 'react'
import "../../index"
import "./Navbar.css"
import a from "../../assets/social.png"
import b from "../../assets/logos.png"
import c from "../../assets/youtube.png"
import d from "../../assets/Q9LI1gluCTECYiY4KxCOYDPRRAzGdMGVHiR2n2SW.png"
import { AddToCart, RemoveFromCart } from '../../redux/CartSystem'; // Import your action creators
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {
  const [user, setuser] = useState({})
  const dispatch = useDispatch();
  const [open, setopen] = useState(false)
  const [profil, setprofil] = useState(false)
  const [cart, setcart] = useState(false)
  const [cartss, setcarts] = useState([])
  const [priceall, setpriceall] = useState(0)
  const { carts } = useSelector(item => item.favorite)
  const [shipping, setshipping] = useState(8)
  const [cartsitem, setcartitem] = useState(null)
  const [price, setprice] = useState(0)


  useEffect(() => {
    localStorage.setItem("Favorite", JSON.stringify(carts))
    setpriceall(() => {
      return carts.reduce((prev, item) => {
        return prev + item.price;
      }, 0);
    }


    )




  }, [carts])


  const handleAddToCart = (item) => {
    dispatch(AddToCart(item)); // Dispatch the AddToCart action with the item
  };

  const handleRemoveFromCart = async (item) => {
    dispatch(RemoveFromCart(item)); // Dispatch the RemoveFromCart action with the item
    const itemId= item._id
    try {
      const response = await axios.delete(`http://localhost:4000/api/auth/${user._id}/cart/remove/${itemId }`);
      if (response.status === 200) {
        toast.success("Item Removed From The Cart");
      }
    } catch (error) {
      console.log(error.response.data.error)
      toast.error(error.response.data.error || "An error occurred");
    }
  };
useEffect(()=>
setpriceall(price)
,[price])


useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = await axios.get('http://localhost:4000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setuser(user.data.user);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData();
},);



useEffect(() => {
  const fetchData1 = async () => {
    try {
      const userId = user._id; // Assuming user is defined somewhere in your component
      const response = await axios.get(`http://localhost:4000/api/auth/${userId}/cart`);
      setcartitem(response.data)
      setprice(response.data.totalPrice)
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  fetchData1()


},)
  

useEffect(()=>{
  setcartitem(cartsitem)
},[cartsitem])



  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/logout");

      if (response.status === 200) {
        localStorage.removeItem("token");
        toast.success("Successful Logout");
        window.location.href = '/login';
      } else {
        toast.error('Wrong email or password');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    }
  }
  return (

    <div className='flex flex-col '>
      <div class="md:flex flex-row hidden  items-center w-full justify-around  p-4">
        <div className='flex flex-row items-center justify-between space-x-3'>
          <img src={a} width={30} height={20} />
          <img src={b} width={30} height={20} />
          <img src={c} width={30} height={20} />

        </div>

        <p><b>Free Shipping - </b>This Week Order Over - $55</p>
        <p></p>
      </div>
      <hr className='text-black text-2xl border-black border-1'></hr>

      <div class="navbar border-gray-200 text-black">
        <div class=" flex flex-wrap items-center justify-around  p-4">
          <a href="/" class=" flex items-center font space-x-3 rtl:space-x-reverse">
            <span class="self-center  text-2xl font-semibold whitespace-nowrap text-black">WolfTech</span>
          </a>
          <div class="flex">

            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" width={500} class="block w-[500px]  p-3 px-15 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 relative w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => {
                setopen(!open)
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              {open && <div data-aos="fade-left" className="absolute top-14 w-[65vw] h-screen text-[#f5c518]  flex flex-col items-center z-[99]  bg-[#fff] border border-gray-200 rounded-lg shadow-lg">
                <div>
                  <img src={d} width={150} alt='' />
                </div>
                <ul className="flex flex-col h-max w-full items-center ">
                  <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white cursor-pointer transition duration-300">
                    Home
                  </li>
                  <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
                    Categories
                  </li>
                  <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
                    About
                  </li>
                  <li className="py-4 w-full hover:bg-[#f5c518] hover:text-white  cursor-pointer transition duration-300">
                    Contact Us
                  </li>
                  <li className='flex '>
                    <li className="py-4 hover:bg-[#f5c518]  rounded-lg hover:text-white flex items-center p-4   cursor-pointer transition duration-300">
                      <span className="material-symbols-outlined text-3xl cursor-pointer">
                        person

                      </span>
                      Login
                    </li>
                    <li className="py-4 hover:bg-[#f5c518]  rounded-lg hover:text-white  flex items-center p-4   cursor-pointer transition duration-300">
                      <span className="material-symbols-outlined text-3xl relative z-2 cursor-pointer">
                        shopping_bag
                      </span>
                      Cart
                    </li>
                  </li>
                </ul>
              </div>}
            </button>

          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" width={500} class="block w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <div className=' px-8 space-x-2 w-full flex items-center justify-center'>
              <p className='realtive' onClick={() => { setprofil(!profil) }}>  <span className="  material-symbols-outlined text-3xl cursor-pointer">
                person


              </span>
                {profil && <div id="dropdownHover" class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">

                    <li >
                      <Link to={"/profil"} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                    </li>

                    <li>
                      <p href="#" onClick={handleLogout} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
                    </li>
                  </ul>
                </div>}
              </p>

              <Link className='realtive' to="" onClick={() => { setcart(!cart) }}>  <span className="material-symbols-outlined text-3xl relative z-2 cursor-pointer">
                shopping_bag</span>





                {cart && cartsitem.products.length>0 ? <div class=" absolute  z-10 w-max top-[120px] right-[220px]">
                  <div class="rounded-3xl bg-white shadow-lg">
                    <div class="px-4 py-6 sm:px-8 sm:py-10">
                      <div class="flow-root">
                      <ul className="-my-8">
  {cartsitem.products.length>0 && cartsitem.products.map((item) => (
    <li key={item._id} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0 relative">
        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={"http://localhost:4000/" + item.image} alt="" />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <Link to={"http://localhost:4000/" + item._id}>
              <p className="text-base font-semibold text-gray-900">{item.name}</p>
            </Link>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{item.price}</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
            <svg onClick={() => { handleRemoveFromCart(item) }} className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>

                      </div>


                      <div class="mt-6 space-y-3 border-t border-b py-8">
                        <div class="flex items-center justify-between">
                          <p class="text-gray-400">Subtotal</p>
                          <p class="text-lg font-semibold text-gray-900">${price}</p>
                        </div>
                        <div class="flex items-center justify-between">
                          <p class="text-gray-400">Shipping</p>
                          <p class="text-lg font-semibold text-gray-900">${shipping}</p>
                        </div>
                      </div>
                      <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Total</p>
                        <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span>${price + shipping}</p>
                      </div>

                      <div class="mt-6 text-center">
                        <Link to={'/Cart'}><button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                          Place Order
                          <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button></Link>
                      </div>
                    </div>
                  </div>
                </div> : null}

              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
