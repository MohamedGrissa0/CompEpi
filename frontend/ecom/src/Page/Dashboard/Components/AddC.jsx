import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function AddC() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [visibility, setVisibility] = useState(false);

    const handleRemoveCategory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/category/${id}`);
            if (response.status === 200) {
                alert('Category removed successfully!');
                setCategories(categories.filter(category => category._id !== id));
            } else {
                alert('Failed to remove Category.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to Remove Category.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            uploadedImages.forEach(image => {
                formData.append('images', image);
            });
            formData.append('name', name);
            formData.append('description', desc);
            formData.append('visibility', visibility);

            const response = await axios.post('http://localhost:4000/api/category', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Category added successfully!');
                setCategories([...categories, response.data]); // Update categories state with the newly added category
            } else {
                alert('Failed to add Category.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add Category.');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/category");
                if (response.data.length !== 0) {
                    setCategories(response.data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='col-span-12 md:col-span-10 my-2 w-full mx-1 rounded-xl md:mx-0 bg-gray-200'>
            <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-2'>
                <div className="rounded bg-white border-2 px-8 pt-6 pb-8 mb-4 col-span-12 md:col-span-8 flex flex-col mx-4 md:mx-0">
                    <input type="text" onChange={(e) => setName(e.target.value)}
                        placeholder="Name (e.g., Blue Summer Shirt)" className='w-full p-4 border-1 border-gray-400 rounded-lg border my-4 focus:outline-none' autoFocus required />

                    <textarea placeholder="Description" onChange={(e) => setDesc(e.target.value)}
                        className='w-full h-40 p-4  rounded-lg border focus:outline-none resize-none' required></textarea>

                    <div className='bg-white mt-4 p-4  rounded'>
                        <p className='mb-4 font-bold'>Upload Images</p>
                        <hr className='mb-4' />
                        <input type='file' onChange={(e) => setUploadedImages(Array.from(e.target.files))}
                            accept='image/*' multiple />
                    </div>

                    <div className='flex items-center w-full'>
                        <button type='submit' className='bg-[#f5c518] text-white px-4 py-3 rounded ml-2'>
                            Add
                        </button>
                    </div>
                    <div className='bg-white mt-4 rounded'>
                        <p className='mb-4 font-bold'>Categories</p>
                        <hr className='mb-4' />
                        {categories.map((category, index) => (
                            <div key={index} className='flex items-center justify-between w-full'>
                                <p className='p-4'>{category.name}</p>
                                <button
                                    type='button'
                                    onClick={() => handleRemoveCategory(category._id)}
                                    className='text-red-500'
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col-span-12 bg-white rounded px-8 pt-6 pb-8 shadow-md md:col-span-4 mx-4 mt-1 h-max md:mx-0'>
                    <div className='bg-white p-4  rounded'>
                        <p className='mb-4 font-bold'>Visibility</p>
                        <hr className='mb-4' />
                        <div className='flex flex-row items-center space-x-3 p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'>
                            <input type='checkbox'
                                checked={visibility}
                                onChange={(e) => setVisibility(e.target.checked)} className='text-2xl p-2 w-5 h-5' />
                            <p>Online Store</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
