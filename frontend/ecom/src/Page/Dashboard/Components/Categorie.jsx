import React ,{useState , useEffect} from 'react'
import axios from 'axios';

import { Link } from "react-router-dom";

export default function Categorie() {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const category = await axios.get("http://localhost:4000/api/category");
                if(category.data.length!==0)
                {
                    setcategories(category.data)
                }
                //console.log(product.data)
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, );


    const handleRemoveCategory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/category/${id}`);
            if (response.status === 200) {
                alert('Category removed successfully!');
            } else {
                alert('Failed to remove Category.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to Remove Category.');
        }
    }
useEffect(()=>{
    //console.log(categories)
},)

    const redirect = ()=>{
    }
    return (






 
        <div className='col-span-12 md:col-span-10 rounded-md relative my-2 bg-white w-full  h-full  '>
<div className='flex justify-between items-center m-3 '>
<h1 className='p-1 font-bold text-md'>Products</h1>
<a href='/add-Category'><button className='p-4 font-semi bg-[#f5c518] text-white rounded-lg text-md' >Add Category</button> </a>

</div>
            <div className='w-full flex flex-col  bg-white-200 shadow-lg h-full p-3 text-md'>
                <div className='w-full flex  justify-between  h-max  p-3 text-md'>
                    <div className='w-full flex items-center bg-white justify-between border border-1 border-gray-300 rounded-lg shadow-md h-max p-2 text-md'>
                        <span className="material-symbols-outlined text-[20px] rounded-lg  bg-gray-200 shadow-lg p-3 text-black">
                            search
                        </span>
                        <input type='text' placeholder='Search for products ' className='w-full p-4 outline-0' />
                    </div>
                    <div className='w-max flex items-center bg-white justify-between border border-1 border-gray-300 rounded-lg shadow-md h-max p-[23px]  mx-2 text-md'>

                        <select id="cars w-max hover:outline-0 " >
                            <option value="" >Search filters</option>

                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>

                    </div>

                </div>
                <div className='w-full flex flex-col text-center justify-between p-3 text-md'>
    <div className="overflow-x-auto">
        <table className="w-full text-sm text-center rtl:text-right border-collapse border border-gray-300">
            <thead className="text-xs text-center text-black uppercase bg-gray-200">
                <tr>
                <th scope="col" className="px-6 py-3 border border-gray-300">
                        Img
                    </th>
                    <th scope="col" className="px-6 py-3 border border-gray-300">
                        Name
                    </th>
                 
                 
                    <th scope="col" className="px-6 py-3 border border-gray-300">
                        Visibility
                    </th>
                    <th scope="col" className="px-6 py-3 border border-gray-300">
                        Creation Date
                    </th>
                    <th scope="col" className="px-6 py-3 border border-gray-300">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category,index)=>{
                    return(
      <tr className="border-b border-gray-300 text-center ">
                <td className="px-6 py-4 border border-gray-300 text-center flex items-center justify-center ">

                <img src={"http://localhost:4000/"+category.images[0]} width={50} alt='' className='rounded-full' />
                </td>

                    <td className="px-6 py-4 border border-gray-300">
                        <p>{category.name}</p>
                    </td>
                
                    <td className="px-6 py-4 border border-gray-300">
                        {category.visibility}
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                        19-04-2000
                    </td>
                    <td className="px-6 py-4 border border-gray-300">
                        <div className='flex justify-center space-x-2'>
                            <Link to={`/category/${category.name}`}><span className="material-symbols-outlined text-[20px] cursor-pointer rounded-lg my-1 bg-gray-200 shadow-lg p-3 text-black">
                                visibility
                            </span></Link>
                            <span  className="material-symbols-outlined text-[20px] cursor-pointer rounded-lg my-1 bg-gray-200 shadow-lg p-3 text-black">
                                edit
                            </span>
                            <span onClick={()=>{handleRemoveCategory(category._id)} }className="material-symbols-outlined text-[20px] cursor-pointer rounded-lg my-1 bg-gray-200 shadow-lg p-3 text-black">
                                delete
                            </span>
                        </div>
                    </td>
                </tr>)
                } )}
          
               
               
            </tbody>
        </table>
    </div>
</div>


            </div>
        

        </div>
    )
}
