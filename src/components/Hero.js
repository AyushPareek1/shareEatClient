import React from 'react';
import poorchild from './assets/poorchild.jpg'
import JoinUs from './Joinus';


const Banner = () => {
    return (

        <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
            <div data-theme="teal" class="mx-auto max-w-6xl">

                <section class="font-sans text-black ">
                    <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                        <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60 mr-6">
                            <div class="h-full">
                                <article class="h-full">
                                    <div class="h-full">
                                        <img class="h-full object-cover" src={poorchild} width="733" height="412" alt='""' typeof="foaf:Image" />
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="p-6 bg-grey">
                            <div class="leading-relaxed">
                                <h2 class="leading-tight text-4xl font-bold">See these cute innocent lil' faces?</h2>
                                <p class="mt-4">Maybe you can put a smile on their faces!</p>
                                <p class="mt-4">we are non profit platform that facilitates the seamless connection between individuals, businesses, and organizations, fostering the sharing of surplus food resources with those facing hunger.</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <JoinUs />

        </div>

    );
};

export default Banner;