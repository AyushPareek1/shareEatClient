import React, { useState } from 'react';
import axios from 'axios';
import Header from './Navbar';
import Footer from './Footer';
import { SIGNIN, SIGNUP } from '../Utils/constant';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [orgType, setOrgType] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(name);
            console.log(email);
            const response = await axios.post(`${SIGNUP}`, { name, email, password, orgType });
            localStorage.setItem('token', response.data.token);
            Swal.fire(
                'Success!',
                'You have signed up successfully.',
                'success'
            );
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            Swal.fire(
                'Error!',
                'There was a problem with your sign up.',
                'error'
            );
        }
    };
    return (
        <>
            <Header />
            <form className="space-y-6 min-h-screen bg-white" onSubmit={handleSubmit}>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="flex justify-center items-center ">
                        <span className="px-2 py-1 font-bold text-3xl italic text-custom-color text-center"> ShareEat</span>
                    </div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-custom-color">Sign Up</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6  text-custom-color">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="name" autoComplete="name" required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6  text-custom-color mt-2">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6  text-custom-color mt-2">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" value={password}
                                    onChange={e => setPassword(e.target.value)} autoComplete="current-password" required className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                            </div>
                        </div>
                        <div>
                            <label for="orgType" className="block text-sm font-semibold leading-6 text-gray-900">Organisation Type</label>
                            <div className="mt-2.5">
                                <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="foodType" id="foodType" value={orgType} onChange={e => setOrgType(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value="ngo">NGO</option>
                                    <option value="donor">Eatery Donor</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6">Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
};

export default SignUp;