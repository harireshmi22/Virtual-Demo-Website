import React from 'react';
import { features } from '../constants';

const FeatureSection = () => {
  return (
    <div className="relative mt-16 sm:mt-20 border-b border-gray-500/50 px-4 sm:px-8 min-h-[800px]">
      {/* Title Section */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-base sm:text-lg md:text-xl px-4 py-2 uppercase font-orbitron font-bold">
          Features
        </span>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl mt-8 lg:mt-20 tracking-wide font-orbitron uppercase leading-snug">
          Easily build{' '}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-y-12 sm:gap-y-16 mt-10 sm:mt-16">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="flex">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full mr-4 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-lg sm:text-xl text-white font-orbitron uppercase font-bold mb-2">
                  {feature.text}
                </h5>
                <p className="text-sm sm:text-base text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
