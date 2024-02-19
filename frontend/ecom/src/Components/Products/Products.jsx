import React, { useState, useEffect } from 'react'
import './Products.css'
import axios from 'axios'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/CartSystem'; // Import your action creators
import { ToastContainer, toast } from 'react-toastify';
function Products(props) {
  const [user, setuser] = useState({})
  const dispatch = useDispatch();
  const { carts } = useSelector(item => item.favorite)
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
  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await axios.get("http://localhost:4000/api/product");
        setproducts(product.data)
        console.log(product.data)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
  },)

  useEffect(() => {
    localStorage.setItem("Favorite", JSON.stringify(carts))

  }, [carts])

 const handleAddToCart = async (item) => {
  dispatch(AddToCart(item));
  try {
    const response = await axios.post(`http://localhost:4000/api/auth/${user._id}/cart/add`, {item });
    if (response.status === 200) {
      toast.success("Item added to Cart");
    }
  } catch (error) {
    console.log(error.response.data.error)
    toast.error(error.response.data.error || "An error occurred");
  }
};


  const handleRemoveFromCart = (item) => {
    dispatch(RemoveFromCart(item)); // Dispatch the RemoveFromCart action with the item
  };

  return (
    <div className="container-products mx-auto h-auto container  rounded-md   p-4 mt-2">
      <div className="product-title flex justify-center items-center mt-10">

        <p className=' border-2 border-black px-10 py-8 flex items-center justify-center hover:bg-black hover:text-white hover:transition-all hover:translate-x-1'>{props.title}</p>
      </div>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 justify-items-center">
        {products.map((item) => (
          <Card
            key={item._id}  // Make sure to include a unique key prop when mapping over arrays
            link={item._id}
            price={item.price}
            name={item.name}
            id={item._id}
            bg={item.images[0]}
            handleAddToCart={() => handleAddToCart(item)}  // Pass a function that calls handleAddToCart with the current item
          />
        ))}
      </ul>



    </div>
  )
}

export default Products
