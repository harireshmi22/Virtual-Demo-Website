import React from 'react'
import codeImg from '../assets/code1.png'
import { checklistItems } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
    return (
        <div className="mt-16 sm:mt-20 px-4 sm:px-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide text-white font-orbitron font-semibold uppercase leading-tight">
                Accelerate your
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}coding workflow
                </span>
            </h2>

            {/* Image + Checklist Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-12">
                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img src={codeImg} alt="Coding" className="w-full max-w-full h-auto rounded-lg" />
                </div>

                {/* Checklist */}
                <div className="w-full lg:w-1/2 pt-4 sm:pt-8">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex items-start mb-10">
                            <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full mr-4">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="text-lg sm:text-xl text-white mb-1 font-semibold">
                                    {item.title}
                                </h5>
                                <p className="text-sm sm:text-base text-neutral-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow;
