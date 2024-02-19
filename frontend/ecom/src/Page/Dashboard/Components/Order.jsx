import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default function Order() {
    const [selectedOption, setSelectedOption] = useState("pending");
    const [orders, setOrders] = useState([]);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/order/${selectedOption}`);
                if (response.status === 200) {
                    setOrders(response.data);
                }
            } catch (error) {
                console.error(error);
                toast.error(error.response?.data?.error || "An error occurred");
            }
        };
        fetchData();
    }, [selectedOption]);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/order/${orderId}/status`, { status: newStatus });
            if (response.status === 200) {
                // Optionally, you can update the local state with the updated order data
                const updatedOrders = orders.map(order => {
                    if (order._id === orderId) {
                        return { ...order, status: newStatus };
                    }
                    return order;
                });
                setOrders(updatedOrders);
                toast.success("Order status updated successfully");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.error || "An error occurred while updating order status");
        }
    };
    

    return (
        <div className='col-span-12 md:col-span-10 my-2 w-full mx-1 md:mx-0'>
            <div className='flex items-center text-center justify-around w-full mt-2 bg-gray-200 p-2 '>
                <p className={'p-1 relative cursor-pointer'} onClick={() => handleClick('pending')}>PENDING</p>
                <p className={'p-1 relative cursor-pointer'} onClick={() => handleClick('shipped')}>SHIPPED</p>
                <p className={'p-1 relative cursor-pointer'} onClick={() => handleClick('delivered')}>DELIVERED</p>
                <p className={'p-1 relative cursor-pointer'} onClick={() => handleClick('canceled')}>Canceled</p>

            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right border-collapse border-1 border-white">
                    <thead className="text-xs  text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white border-1">
                        <tr className=''>                            <th scope="col" className="px-6 py-3 border border-gray-300">Products</th>

                            <th scope="col" className="px-6 py-3 border border-gray-300">Date</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Reference</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Customer</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Address</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Nb items</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Total</th>
                            <th scope="col" className="px-6 py-3 border border-gray-300">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b border-white border-1">
                                <td className="px-6 py-4 border border-gray-300">
                                    <ul>
                                        {order.products.map((product, idx) => (
                                            <li key={idx}>{product.name} - ${product.price} - Quantity: {product.quantity}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="px-6 py-4 border border-gray-300">{order.createdAt}</td>
                                <td className="px-6 py-4 border border-gray-300">{order._id}</td>
                                <td className="px-6 py-4 border border-gray-300">{order.userId}</td>
                                <td className="px-6 py-4 border border-gray-300">{order.shippingAddress}</td>
                                <td className="px-6 py-4 border border-gray-300">{order.products.length}</td>
                                <td className="px-6 py-4 border border-gray-300">${order.totalPrice}</td>.
                                <td className="px-6 py-4 flex  border-b border-gray-300">
                <button className='mx-4 bg-[#f5c518] p-2 text-white' onClick={() => handleStatusChange(order._id, 'shipped')}>Ship</button>
                <button className='bg-[#f5c518] p-2 text-white' onClick={() => handleStatusChange(order._id, 'delivered')}>Deliver</button>
                <button className='bg-[#f5c518] p-2 mx-2 text-white' onClick={() => handleStatusChange(order._id, 'canceled')}>Canceled</button>

            </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <ToastContainer />
        </div>
    );
}
