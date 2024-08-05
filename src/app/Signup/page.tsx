"use client"
import { useState } from 'react';
import Image from "next/image"
import card from "@/app/images/pic.png"

export default function Signup() {
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userData = {
            client_id: '{yourClientId}',
            email: formData.email,
            password: formData.password,
            connection: 'CONNECTION',
            username: formData.email.split('@')[0],
            given_name: formData.firstName,
            family_name: formData.lastName,
            name: `${formData.firstName} ${formData.lastName}`,
            nickname: formData.firstName,
            picture: 'http://example.org/jdoe.png',
            user_metadata: { plan: 'silver', team_id: 'a111' }
        };
        try {
            const response = await fetch('https://dev-e0kszng6srwgkms4.us.auth0.com/dbconnections/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userData)

            });
            if (!response.ok) {
                const errorJson = await response.json();
                setError(errorJson.error)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg-[#2F3349] min-h-screen w-full relative flex'>
            <div className="pt-20 w-1/3 justify-center min-h-screen flex flex-col items-center">
                <h1 className="text-[#807EFF] text-5xl mb-5 font-bold">Naqdi</h1>
                <div className="text-white text-2xl pb-20 opacity-80">
                    <h2>Enjoy fast and hassle-free</h2>
                    <h2>transactions for all your needs.</h2>
                </div>
                <div>
                    <Image src={card.src} height={350} width={350} alt="logo" />
                </div>
            </div>

            <div className='w-2/3 flex items-center justify-center mx-20 my-5'>
                <div className='bg-[#25293C] p-10 rounded-2xl shadow-lg px-20 border border-white'>
                    <h2 className='text-white text-3xl mb-6'>Sign Up Now</h2>
                    <form className='space-y-4 text-white' onSubmit={handleSubmit}>
                        <div className='flex space-x-4'>
                            <div className='flex-1'>
                                <label className='block mb-2'>First Name</label>
                                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                            </div>
                            <div className='flex-1'>
                                <label className='block mb-2'>Last Name</label>
                                <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                            </div>
                        </div>
                        <div>
                            <label className='block mb-2'>Email Address</label>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                        </div>
                        <div>
                            <label className=''>Phone Number</label>
                            <input type='text' name='phone' value={formData.phone} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                        </div>
                        <div>
                            <label className='block text-white mb-2'>Password</label>
                            <input type='password' name='password' value={formData.password} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40] mb-2' />
                            <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            <label className='text-[#BEBEBE]'>
                                By creating an account, I agree to our Terms of use and Privacy Policy
                            </label>
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            <label className='text-[#BEBEBE]'>
                                By creating an account, I am also consenting to receive SMS
                                messages and emails, including product new feature updates,
                                events, and marketing promotions.
                            </label>
                        </div>
                        <p className='text-center text-red-600 text-xl'>{error}</p>
                        <div className='flex items-center justify-center space-x-6'>
                            <button type='submit' className='bg-[#807EFF] text-white py-2 px-12 rounded-2xl'>Sign Up</button>
                            <span className=''>Already have an account? <a href='#' className='text-[#807EFF] underline'>Log in</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
