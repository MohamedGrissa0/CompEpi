import React, { useRef, useState } from 'react';

export default function Product() {
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
                    <textarea placeholder="Description" className='w-full h-40 p-4 border-1 border-gray-400 rounded-lg border focus:outline-none resize-none' required></textarea>
                    <div>
                        <p className='p-4 font-bold text-xl'>Pricing</p>
                        <div className='flex flex-row space-x-2'>
                            <input type="number" placeholder="price" className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none' autoFocus required />
                            <input type="number" placeholder="price after discount" className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none' autoFocus required />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row  items-center my-4 justify-between'>
                            <p className='p-4 font-bold text-xl'>Images</p>
                            <div className='bg-[#f5c518] my- rounded-lg '>
                                <button type="button" onClick={handleChooseFiles} className='p-4 font-normal text-md text-white'>
                                    Upload Images
                                </button>
                                <input ref={fileInputRef} type="file" onChange={handleImageUpload} style={{ display: 'none' }} multiple accept="image/*" />
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            {uploadedImages.map((image, index) => (
                                <img key={index} src={image} alt={`Uploaded ${index}`} className='w-32 h-32 object-cover m-2 rounded-lg' />
                            ))}
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="variants" className='text-xl font-bold'>Variants</label>
                            {variants.map((variant, variantIndex) => (
                                <div key={variantIndex} className='flex flex-col space-y-2'>
                                    <input
                                        type="text"
                                        placeholder={`Variant ${variantIndex + 1} Name`}
                                        value={variant.name}
                                        onChange={(event) => handleVariantNameChange(variantIndex, event)}
                                        className='px-8 py-4 w-max border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                    />
                                    {variant.values.map((value, valueIndex) => (
                                        <div key={valueIndex} className="flex items-center">
                                            <input
                                                type="text"
                                                placeholder={`Value ${valueIndex + 1}`}
                                                value={value}
                                                onChange={(event) => handleVariantValueChange(variantIndex, valueIndex, event)}
                                                className='px-8 py-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveVariantValue(variantIndex, valueIndex)}
                                                className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => handleAddVariantValue(variantIndex)}
                                            className="bg-[#f5c518] text-white flex w-max flex-start px-4 py-2 rounded mt-2"
                                        >
                                            Add Value
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddVariant}
                                className='bg-[#f5c518] text-white py-2 px-4 w-max rounded focus:outline-none focus:shadow-outline'
                            >
                                Add Variant
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 bg-white rounded px-8 pt-6 pb-8 shadow-md md:col-span-4 mx-4 mt-1 md:mx-0'>
                    <div className='bg-white p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Visibility</p>
                        <hr className='mb-4' />
                        <div className='flex flex-row items-center space-x-3 p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'>
                            <input type='checkbox' className='text-2xl p-2 w-5 h-5' />
                            <p>Online Store</p>
                        </div>
                    </div>
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Storage details</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col space-y-5 items-center'>
                            <input
                                type='number'
                                placeholder="Price"
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                            <input
                                type="number"
                                placeholder="Weight"
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                        </div>
                    </div>
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Categories</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col space-y-2 items-center'>
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
            </form>
        </div>
    );
}
