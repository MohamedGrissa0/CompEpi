import React, { useState } from 'react';

export default function Customer() {
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
            customer.name.toLowerCase().includes(customerName.toLowerCase()) &&
            customer.product.toLowerCase().includes(productName.toLowerCase()) &&
            (totalSpent === '' || customer.totalSpent >= parseInt(totalSpent)) &&
            (lastPurchase === '' || customer.lastPurchase.includes(lastPurchase))
        );
    };

    const customers = [
        { name: 'Apple MacBook Pro 17"', product: 'Laptop', totalSpent: 2999, lastPurchase: '2023-01-15' },
        { name: 'Microsoft Surface Pro', product: 'Laptop', totalSpent: 1999, lastPurchase: '2023-02-20' },
        { name: 'Magic Mouse 2', product: 'Accessories', totalSpent: 99, lastPurchase: '2023-03-10' }
        ,
        { name: 'Magic Mouse 2', product: 'Accessories', totalSpent: 99, lastPurchase: '2023-03-10' }
,        { name: 'Magic Mouse 2', product: 'Accessories', totalSpent: 99, lastPurchase: '2023-03-10' }
,        { name: 'Magic Mouse 2', product: 'Accessories', totalSpent: 99, lastPurchase: '2023-03-10' }

    ];

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
                        <thead className="text-xs text-gray-900 uppercase dark:text-gray-500 border-collapse border-b border-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Customer</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Product</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Total Spent</th>
                                <th scope="col" className="px-6 py-3 border border-gray-300">Last Purchase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.filter(filterCustomers).map((customer, index) => (
                                <tr key={index} className="border-b border-white">
                                    <td className="px-6 py-4 border border-gray-300">{customer.name}</td>
                                    <td className="px-6 py-4 border border-gray-300">{customer.product}</td>
                                    <td className="px-6 py-4 border border-gray-300">{customer.totalSpent}</td>
                                    <td className="px-6 py-4 border border-gray-300">{customer.lastPurchase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
