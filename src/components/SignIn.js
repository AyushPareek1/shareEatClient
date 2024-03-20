import React, { useState } from 'react';
import axios from 'axios';
import Header from './Navbar';
import Footer from './Footer';
import { SIGNIN, SIGNUP } from '../Utils/constant';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${SIGNIN}`, { email, password });
            localStorage.setItem('token', response.data.token);
            Swal.fire(
                'Success!',
                'You have signed in successfully.',
                'success'
            );
            navigate('/')
        } catch (error) {
            console.error('Error:', error);
            Swal.fire(
                'Error!',
                'There was a problem with your sign in.',
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
                        <span className="px-2 py-1 font-bold text-3xl italic text-custom-color"> ShareEat</span>
                    </div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-color">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-custom-color">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-custom-color ">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-custom-color hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" value={password}
                                    onChange={e => setPassword(e.target.value)} autoComplete="current-password" required className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base  text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6">Sign in</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
};

export default SignIn;