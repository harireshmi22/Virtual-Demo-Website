import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {
    return (
        <div className="mt-16 sm:mt-20 px-4 sm:px-8 tracking-wide">
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center my-10 text-white font-orbitron uppercase">
                What People Are Saying
            </h2>

            {/* Testimonials Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
                        <div className="bg-neutral-900 rounded-md p-6 h-full text-base border border-neutral-700 font-light flex flex-col justify-between">
                            {/* Testimonial Text */}
                            <p className="text-white mb-6 flex-grow">{testimonial.text}</p>

                            {/* User Info */}
                            <div className="flex items-start">
                                <img
                                    className="w-12 h-12 mr-4 rounded-full border border-neutral-300 object-cover"
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                />
                                <div>
                                    <h6 className="text-neutral-300 font-semibold">{testimonial.user}</h6>
                                    <span className="text-sm italic text-neutral-500">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
