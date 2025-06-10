import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants';

const Pricing = () => {
    return (
        <div className="mt-16 px-4 sm:px-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center my-8 tracking-wider text-white font-orbitron uppercase">
                Pricing
            </h2>

            {/* Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
                        <div className="p-6 sm:p-8 border border-neutral-700 rounded-xl h-full flex flex-col justify-between bg-neutral-900/50 backdrop-blur-sm">
                            {/* Plan Title */}
                            <p className="text-3xl sm:text-4xl text-white mb-6 font-orbitron uppercase tracking-tight">
                                {option.title}
                                {option.title === 'Pro' && (
                                    <span className="block sm:inline text-sm sm:text-lg bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text ml-2">
                                        (Most popular)
                                    </span>
                                )}
                            </p>

                            {/* Price */}
                            <p className="mb-6">
                                <span className="text-white text-4xl sm:text-5xl mr-2">{option.price}</span>
                                <span className="text-neutral-400 text-sm sm:text-base">/Month</span>
                            </p>

                            {/* Features */}
                            <ul className="mb-8">
                                {option.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2 mt-4">
                                        <CheckCircle2 className="text-gray-50 mt-1" size={20} />
                                        <span className="text-sm sm:text-base text-neutral-400">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <a
                                href="#"
                                className="inline-flex justify-center items-center text-white w-full py-3 mt-auto text-base sm:text-lg font-semibold hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
