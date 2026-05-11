'use client';
import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/headphone3.jpg"
        alt="Premium Headphones"
        fill
        priority
        className="object-cover object-center md:object-right"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 md:via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="max-w-2xl text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full mb-6 border border-white/20">
              🎧 Premium Audio Collection
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Experience Sound<br className="hidden sm:block" />
              Like Never Before
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-md mx-auto md:mx-0">
              Premium noise-cancelling headphones with crystal clear audio,
              long battery life and luxurious comfort.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center md:justify-start">

              <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold flex items-center justify-center gap-3 group">
                Shop Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full sm:w-auto border border-white/60 hover:bg-white/10 transition-all text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold backdrop-blur-md">
                Learn More
              </button>

            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-6 mt-10 sm:mt-12 text-white/80 text-xs sm:text-sm">
              <div>✅ 2 Year Warranty</div>
              <div>✅ Free Delivery</div>
              <div>✅ 30 Days Return</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;