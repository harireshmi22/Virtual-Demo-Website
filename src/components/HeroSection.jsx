import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-center text-white font-orbitron font-black uppercase leading-tight">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}for developers
                </span>
            </h1>



            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center text-neutral-500 max-w-xl">
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>

            {/* Buttons side-by-side */}
            <div className="flex justify-center flex-wrap gap-3 my-6">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md font-orbitron uppercase font-bold text-sm'>
                    Start for free
                </a>
                <a href="#" className='border border-gray-50 text-white py-2 px-4 rounded-md font-orbitron uppercase font-bold text-sm'>
                    Documentation
                </a>
            </div>

            {/* Videos */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6 w-full">
                <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-700">
                    <source src={video1} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-700">
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default HeroSection;
