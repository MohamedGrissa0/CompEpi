import React, { useEffect, useState } from 'react';
import axios from "axios";

const Product = () => {
    // State variables
    const [uploadedImages, setUploadedImages] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [catchnage, setcatchnage] = useState("");
    const [price, setPrice] = useState("");
    const [priced, setPriced] = useState("");
    const [weight, setWeight] = useState("");
    const [qte, setQte] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [categories, setCategories] = useState("");
    const [AllC, setAllC] = useState([]);

    const [variantName, setVariantName] = useState("");
    const [variantValue, setVariantValue] = useState("");
    const [variants, setvariants] = useState([]);
    const handleFileUpload = (e) => {
        setUploadedImages(Array.from(e.target.files));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/category");
                if (response.data.length !== 0) {
                    setAllC(response.data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            uploadedImages.forEach((image) => {
                formData.append('images', image);
            });
            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('price', price);
            formData.append('priced', priced);
            formData.append('weight', weight);
            formData.append('qte', qte);
            formData.append('visibility', visibility);
            formData.append('categories', categories); // No need to stringify
            formData.append('variants', JSON.stringify(variants));

            const product = await axios.post('http://localhost:4000/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (product.status === 200) {
                alert('Product added successfully!');
            } else {
                alert('Failed to add product.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add product.');
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await axios.get("http://localhost:4000/api/product");
                console.log(product.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log({
            name,
            desc,
            price,
            priced,
            visibility,
            qte,
            weight,
            categories,
            variants
        });
    });

    const handleAddVariant = () => {
        if (variantName.trim() !== "" && variantValue.trim() !== "") {
            const values = variantValue.split(',').map(value => value.trim());
            const existingVariantIndex = variants.findIndex(variant => variant.name === variantName.trim());
            if (existingVariantIndex !== -1) {
                const updatedVariants = [...variants];
                updatedVariants[existingVariantIndex].values = [...updatedVariants[existingVariantIndex].values, ...values];
                setvariants(updatedVariants);
            } else {
                setvariants([...variants, { name: variantName.trim(), values }]);
            }
            setVariantName("");
            setVariantValue("");
        }
    };

    return (
        <div className='col-span-12 md:col-span-10 my-2 w-full mx-1 rounded-xl md:mx-0 bg-gray-200'>
            <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-2'>
                {/* Product Details Section */}
                <div className="rounded bg-white border-2 px-8 pt-6 pb-8 mb-4 col-span-12 md:col-span-8 flex flex-col mx-4 md:mx-0">
                    {/* Product Name */}
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Product Name (e.g., Blue Summer Shirt)"
                        name='name'
                        className='w-full p-4 border-1 border-gray-400 rounded-lg border my-4 focus:outline-none'
                        autoFocus
                        required
                    />
                    {/* Product Description */}
                    <textarea
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Description"
                        name="description"
                        className='w-full h-40 p-4 border-1 border-gray-400 rounded-lg border focus:outline-none resize-none'
                        required
                    ></textarea>
                    {/* Pricing Section */}
                    <div>
                        <p className='p-4 font-bold text-xl'>Pricing</p>
                        <div className='flex flex-row space-x-2'>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                placeholder="Price"
                                name='price'
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                            <input
                                onChange={(e) => setPriced(e.target.value)}
                                type="number"
                                placeholder="Price After Discount"
                                name='pricedis'
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                        </div>
                        <div className='bg-white mt-4 p-4 shadow-md rounded'>
                            <p className='mb-4 font-bold'>Upload Images</p>
                            <hr className='mb-4' />
                            <input type='file' onChange={handleFileUpload} multiple accept='image/*' />
                        </div>
                    </div>
                    {/* Variants Section */}
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Variants</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col space-y-2 items-center'>
                            {variants.map((variant, index) => (
                                <div key={index} className='flex items-center justify-between w-full'>
                                    <p className='p-4'>{variant.name}: {variant.values.join(', ')}</p>
                                    <button
                                        type='button'
                                        onClick={() => setvariants(prevVariants => prevVariants.filter((_, i) => i !== index))}
                                        className='text-red-500'
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className='flex items-center w-full'>
                                <input
                                    type='text'
                                    placeholder='Variant Name'
                                    value={variantName}
                                    onChange={(e) => setVariantName(e.target.value)}
                                    className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                />
                                <input
                                    type='text'
                                    placeholder='Variant Value (Separate by comma)'
                                    value={variantValue}
                                    onChange={(e) => setVariantValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault(); // Prevent form submission
                                            handleAddVariant();
                                        }
                                    }}
                                    className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                />
                                <button
                                    type='button'
                                    onClick={handleAddVariant}
                                    className='bg-[#f5c518] text-white px-4 py-3 rounded ml-2'
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sidebar Section */}
                <div className='col-span-12 bg-white rounded px-8 pt-6 pb-8 shadow-md md:col-span-4 mx-4 mt-1 md:mx-0'>
                    {/* Visibility Section */}
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Visibility</p>
                        <hr className='mb-4' />
                        <div className='flex flex-row items-center space-x-3 p-4 border-1 border-gray-400 rounded-lg border focus:outline-none'>
                            <input
                                type='checkbox'
                                checked={visibility}
                                onChange={(e) => setVisibility(e.target.checked)}
                                className='text-2xl p-2 w-5 h-5'
                            />
                            <p>Online Store</p>
                        </div>
                    </div>
                    {/* Storage Details Section */}
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Storage details</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col space-y-5 items-center'>
                            <input
                                onChange={(e) => setQte(e.target.value)}
                                name='qte'
                                type='number'
                                placeholder="Qte"
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                            <input
                                onChange={(e) => setWeight(e.target.value)}
                                name='weight'
                                type="number"
                                placeholder="Weight"
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required
                            />
                        </div>
                    </div>
                    {/* Categories Section */}
                    <div className='bg-white mt-4 p-4 shadow-md rounded'>
                        <p className='mb-4 font-bold'>Categories</p>
                        <hr className='mb-4' />
                        <div className='flex flex-col space-y-2 items-center'>
                            <select
                                type='text'
                                placeholder='Add Category'
                                onChange={(e) => setCategories(e.target.value)}
                                className='w-full p-4 border-1 border-gray-400 rounded-lg border  focus:outline-none'
                                autoFocus
                                required>
                                <option value="">Choose</option>
                                {AllC.map((item) => {
                                    return (<option value={item.name}>{item.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className='p-3 bg-red-500 col-span-12 md:col-span-8 md:mx-4'>Add Product</button>
            </form>
        </div>
    );
}

export default Product;
