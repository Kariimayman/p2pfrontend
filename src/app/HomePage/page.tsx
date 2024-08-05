"use client"
import { useState, useEffect } from 'react';
export default function Home() {
    const [balance, setBalance] = useState(0);
    const transactions = [
        { id: 1, type: 'Deposit', amount: 2000, date: '2024-07-01' },
        { id: 2, type: 'Withdrawal', amount: 3000, date: '2024-07-02' },
        // Add more transactions as needed
    ];

    useEffect(() => {
        async function fetchBalance() {
            try {
                const response = await fetch('http://k8s-default-balancei-9e9ee7be64-1286499500.me-central-1.elb.amazonaws.com/balance/getbalance'); // Replace with your API endpoint
                const data = await response.json();
                setBalance(data.data);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        }

        fetchBalance();
    }, []);

    return (

        <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-40 animate-pulse"></div>
                    <div className="absolute w-1/2 h-1/2 bg-gradient-to-t from-blue-500 to-transparent rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500 to-transparent rounded-full opacity-20 blur-3xl animate-ping"></div>
                </div>
            </div>
            <main className="flex flex-col items-center w-full max-w-2xl z-10">

                <div className="shadow-xl rounded-lg p-8 w-full mb-8 bg-white bg-opacity-10 backdrop-blur-md">
                    <h1 className="text-3xl font-bold text-center mb-4 text-white">Account Balance</h1>
                    <p className="text-5xl font-semibold text-center mb-6 text-green-400">${balance.toFixed(2)}</p>
                    <div className="flex justify-around mb-6">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                            Add Cash
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                            Withdraw Cash
                        </button>
                    </div>
                </div>
                <div className="shadow-xl rounded-lg p-8 w-full bg-white bg-opacity-10 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-center mb-4 text-white">Transaction History</h2>
                    <ul className="space-y-4">
                        {transactions.map(transaction => (
                            <li key={transaction.id} className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div>
                                    <span className="block text-lg font-medium text-white">{transaction.type}</span>
                                    <span className="text-gray-700 text-sm">{transaction.date}</span>
                                </div>
                                <span className={`text-lg font-bold ${transaction.type === 'Deposit' ? 'text-green-400' : 'text-red-400'}`}>
                                    ${transaction.amount.toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </main>
    );
}
