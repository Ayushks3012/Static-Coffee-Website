import React from 'react'
import Title from '../assets/Title.svg';
import CoffeeBeans from "../assets/CoffeeBeans.png";

const Discover = () => {
  return (
    <section className='relative bg-gradient-to-r from-[#f1e0c5] to-[#4b3838] min-h-[50vh] text-[#4e342e] font-serif py-12 px-4 flex items-center overflow-hidden'> 
      <div className='container max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8'>

        {/* Left side */}
        <div className='relative w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-7'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            Discover the best coffee
          </h1>
          <p className='text-base sm:text-lg md:text-xl leading-relaxed mb-6'>
            Bean Scene is a coffee shop that provide you with quality coffee that helps boost your productivity and builds your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than any other you have ever tasted.
          </p>
          <div className='relative group'>
            <img src={Title} alt="Img" className=' absolute -translate-x-1 bottom-6 group-hover:rotate-[20deg] group-hover:scale-150 group-hover:translate-x-2 transition-all duration-300 z-10' style={{width:'30px',height:'30px'}}/>
            <button className='bg-[#4e342e] text-white py-3 px-6 rounded-full shadow-md group-hover:shadow-lg transform group-hover:translate-x-4 transition-all duration-300 ease-in-out group-hover:bg-[#3e2723] group-hover:text-white '>
              Learn More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className='w-full md:w-1/2 flex justify-center items-center md:justify-end px-4'>
          <img src={CoffeeBeans} alt="Coffee Beans" className='w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain' />
        </div>
      </div>
    </section>
  )
}

export default Discover