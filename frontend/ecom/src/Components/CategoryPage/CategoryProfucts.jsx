import React, {useState,useEffect} from 'react'
import Card from '../Card/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/CartSystem'; // Import your action creators
export default function CategoryProfucts() {
    const [products, setproducts] = useState([])
    const {id} = useParams()
    const {carts}=useSelector(item=>item.favorite)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await axios.get(`http://localhost:4000/api/product/category/${id}`);
                console.log(product.data);
                setproducts(product.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, [id]); 
    

    useEffect(() => {
        console.log(products)
    })

    useEffect(()=>{
        localStorage.setItem("Favorite",JSON.stringify(carts))
       
         },[carts])
      const handleAddToCart = (item) => {
        dispatch(AddToCart(item)); // Dispatch the AddToCart action with the item
      };
      
      const handleRemoveFromCart = (item) => {
        dispatch(RemoveFromCart(item)); // Dispatch the RemoveFromCart action with the item
      };

    return (
        <div className="container-products mx-auto h-auto container  rounded-md   p-4 mt-2">
            <div className="product-title flex justify-center items-center mt-10">

                <p className=' border-2 border-black px-10 py-8 flex items-center justify-center hover:bg-black hover:text-white hover:transition-all hover:translate-x-1'>{id}</p>
            </div>
            <ul role="list" class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-5 justify-items-center  ">
                {products.map((item) => {
                    return (<Card link={item._id} price={item.price} name={item.name}       handleAddToCart={() => handleAddToCart(item)}  // Pass a function that calls handleAddToCart with the current item
                    />)

                })}


            </ul>


        </div>
    )
}
