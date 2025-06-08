
import React from 'react'
import { testimonials } from '../constants';

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-white">
                What People are saying
            </h2>
            <div className="flex flex-wrap justify-center ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-fullsm:w-1/2 lg:w-1/3 px-4 py-2 flex">
                        <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-700 font-thin flex flex-col">
                            <p className='text-white flex-grow'>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img
                                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                    src={testimonial.image}
                                    alt=""
                                />
                                <div>
                                    <h6 className='text-neutral-500 font-semibold'>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-400">
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