import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Customer() {
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({
        customerName: '',
        productName: '',
        totalSpent: '',
        lastPurchase: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filterCustomers = (customer) => {
        const { customerName, productName, totalSpent, lastPurchase } = filters;

        return (
            customer.username.toLowerCase().includes(customerName.toLowerCase()) &&
            customer.cart.products.some(product => product.name.toLowerCase().includes(productName.toLowerCase())) &&
            (totalSpent === '' || customer.cart.totalPrice >= parseInt(totalSpent)) &&
            (lastPurchase === '' || customer.cart.products.some(product => product.lastPurchase.includes(lastPurchase)))
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/auth/`);
                if (response.status === 200) {
                    setUsers(response.data);
                }
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };
        fetchData();
    }, );

    return (
        <div className='col-span-12 md:col-span-10 mt-4 w-full mx-1 md:mx-0'>
            <div className='grid grid-cols-12 gap-4 md:gap-4'>
                <div className="filter col-span-12 md:col-span-2 mx-4 md:mx-0">
                    <input type="text" name="customerName" placeholder="Customer Name" value={filters.customerName} onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-md w-full mb-2" />
                    <input type="text" name="productName" placeholder="Product Name" value={filters.productName} onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-md w-full mb-2" />
                    <input type="number" name="totalSpent" placeholder="Total Spent" value={filters.totalSpent} onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-md w-full mb-2" />
                    <input type="text" name="lastPurchase" placeholder="Last Purchase" value={filters.lastPurchase} onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-md w-full mb-2" />
                </div>

                <div className="overflow-x-auto col-span-12 md:col-span-10 mx-2">
                    <table className="w-full text-sm text-left rtl:text-right border-collapse border border-gray-300">
                        <thead className="text-xs text-gray-900 uppercase dark:text-gray-500  bg-gray-200 border-collapse border-b border-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Customer</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Product</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Total Spent</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Last Purchase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.filter(filterCustomers).map((user, index) => (
                                <tr key={index} className="border-b border-white">
                                    <td className="px-6 py-4 border border-gray-300">{user.username}</td>
                                    <td className="px-6 py-4 border border-gray-300">
                                        <ul>
                                            {user.cart.products.map((product, idx) => (
                                                <li key={idx}>{product.name}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="px-6 py-4 border border-gray-300">{user.cart.totalPrice}</td>
                                    <td className="px-6 py-4 border border-gray-300">{user.cart.products[0].lastPurchase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
