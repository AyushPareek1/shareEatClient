import React from "react";
import { Link } from "react-router-dom";
function JoinUs() {
    return (
        <div class="relative py-16">

            <div aria-hidden="true"
                class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>

            <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
                <div class="relative">

                    <div class="flex items-center justify-center -space-x-2">
                        <img loading="lazy" width="400" height="400" src="https://randomuser.me/api/portraits/women/12.jpg" alt="member photo" class="h-8 w-8 rounded-full object-cover" />
                        <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/45.jpg" alt="member photo" class="h-12 w-12 rounded-full object-cover" />
                        <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/60.jpg" alt="member photo" class="z-10 h-16 w-16 rounded-full object-cover" />
                        <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/4.jpg" alt="member photo" class="relative h-12 w-12 rounded-full object-cover" />
                        <img loading="lazy" width="200" height="200" src="https://randomuser.me/api/portraits/women/34.jpg" alt="member photo" class="h-8 w-8 rounded-full object-cover" />
                    </div>

                    <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                        <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Get Started now
                        </h1>
                        <p class="text-center text-xl text-gray-600 dark:text-gray-300">
                            Register as a Donor or as a food distribution NGO, lets fight hunger together!
                        </p>
                        <div class="flex flex-wrap justify-center gap-6">
                            <Link to={'/donor-registration'}


                                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span class="relative text-base font-semibold text-white dark:text-dark">Register as a Donor</span>
                            </Link>
                            <Link to={'/ngo-registration'} class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-teal-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span class="relative text-base font-semibold text-teal-500 dark:text-white">Register as an NGO</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default JoinUs

