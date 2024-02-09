import React, { useRef, useState } from 'react';

export default function AddC() {
    const [variants, setVariants] = useState([{ name: '', values: [''] }]);
    const [categories, setCategories] = useState([]);
    const [categoryInput, setCategoryInput] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleSubmit = () => {};

    const handleAddVariant = () => {
        setVariants([...variants, { name: '', values: [''] }]);
    };

    const handleVariantNameChange = (index, event) => {
        const updatedVariants = [...variants];
        updatedVariants[index].name = event.target.value;
        setVariants(updatedVariants);
    };

    const handleVariantValueChange = (variantIndex, valueIndex, event) => {
        const updatedVariants = [...variants];
        updatedVariants[variantIndex].values[valueIndex] = event.target.value;
        setVariants(updatedVariants);
    };

    const handleAddVariantValue = (variantIndex) => {
        const updatedVariants = [...variants];
        updatedVariants[variantIndex].values.push('');
        setVariants(updatedVariants);
    };

    const handleRemoveVariantValue = (variantIndex, valueIndex) => {
        const updatedVariants = [...variants];
        updatedVariants[variantIndex].values.splice(valueIndex, 1);
        setVariants(updatedVariants);
    };

    const handleAddCategory = () => {
        if (categoryInput.trim() !== '') {
            setCategories([...categories, categoryInput.trim()]);
            setCategoryInput('');
        }
    };

    const handleRemoveCategory = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            uploaded.push(URL.createObjectURL(file));
        }
        setUploadedImages([...uploadedImages, ...uploaded]);
    };

    const handleChooseFiles = () => {
        fileInputRef.current.click();
    };

 
    return (
        <div className='col-span-12 md:col-span-10 my-2 w-full mx-1 rounded-xl md:mx-0 bg-gray-200'>
            <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-2'>
                <div className="rounded bg-white border-2 px-8 pt-6 pb-8 mb-4 col-span-12 md:col-span-8 flex flex-col mx-4 md:mx-0">
                    <input type="text" placeholder="Name (e.g., Blue Summer Shirt)" className='w-full p-4 border-1 border-gray-400 rounded-lg border my-4 focus:outline-none' autoFocus required />
                              
                    <textarea placeholder="Description" className='w-full h-40 p-4  rounded-lg border focus:outline-none resize-none' required></textarea>
                    <div className='bg-white mt-4   rounded'>
                        <p className='mb-4 font-bold'>Categories</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col  items-center'>
                            {categories.map((category, index) => (
                                <div key={index} className='flex items-center justify-between w-full'>
                                    <p className='p-4'>{category}</p>
                                    <button
                                        type='button'
                                        onClick={() => handleRemoveCategory(index)}
                                        className='text-red-500'
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className='flex items-center w-full'>
                                <input
                                    type='text'
                                    placeholder='Add Category'
                                    value={categoryInput}
                                    onChange={(e) => setCategoryInput(e.target.value)}
                                    className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                    autoFocus
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={handleAddCategory}
                                    className='bg-[#f5c518] text-white px-4 py-3 rounded ml-2'
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                   
                
                </div>
                <div className='col-span-12 bg-white rounded px-8 pt-6 pb-8 shadow-md md:col-span-4 mx-4 mt-1 h-max md:mx-0'>
                    <div className='bg-white p-4  rounded'>
                        <p className='mb-4 font-bold'>Visibility</p>
                        <hr className='mb-4' />
                        <div className='flex flex-row items-center space-x-3 p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'>
                            <input type='checkbox' className='text-2xl p-2 w-5 h-5' />
                            <p>Online Store</p>
                        </div>
                        
                    </div>
                 
                   
                </div>
            </form>
        </div>
    );
}