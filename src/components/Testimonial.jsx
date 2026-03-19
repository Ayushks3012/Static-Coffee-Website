import React from 'react'
import Men from '../assets/Men.png'
import Women from '../assets/Women.png'


const Testimonial = () => {
  return (
    <div id='testimonial' className='min-h-screen bg-gradient-to-b from-[antiquewhite] to-[wheat] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 font-[poppins]'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-[playfair_Display] text-stone-900 mb-4'>
          voices of Delight
        </h2>
        <p className='text-lg sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto'>
          Discover what our cherished customers say about their extraordinary coffee experiences.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 mx-auto'>
        {/* First Card*/}
        <div className='relative bg-rose-50 rounded-3xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-r-4 border-t-2 border-b-2 md:border-l-[16px] md:border-r-[16px] md:border-t-4 md:border-b-4 border-[#3d2b1e] group overflow-hidden transform hover:scale-105'>
          <div className='text-center'>
            <div className='mb-8'>
              <img src={Men} alt="Men" className='w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto border-4 border-stone-900 shadow-lg transition-transform' />
            </div>
            <div className='relative mb-8'>
              <span className='absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-6xl text-sky-900 opacity-20 '>
                &ldquo;
              </span>
              <p className='text-gray-700 text-lg sm:text-lg md:text-lg leading-relaxed px-4 font-medium'>
                Every sip feels a little slice of heaven. The rich aroma and bold flavors make it my go to for a perfect start to the day 
              </p>
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 text-6xl text-stone-900 opacity-20 '>
                &rdquo;
              </span>
            </div>
            <div className='space-y-2'>
              <h3 className='text-2xl font-[playfair_Display] font-bold text-stone-900'>
                Ayush
              </h3>
              <p className='text-sm text-stone-600 uppercase tracking-widest'>
                Coffee Enthusiast
              </p>
              <div className='w-full h-1 bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900 opacity-50 rounded-full mt-4' />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='relative bg-rose-50 rounded-3xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-r-4 border-t-2 border-b-2 md:border-l-[16px] md:border-r-[16px] md:border-t-4 md:border-b-4 border-[#3d2b1e] group overflow-hidden transform hover:scale-105'>
          <div className='text-center'>
            <div className='mb-8'>
              <img src={Women} alt="Women" className='w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto border-4 border-stone-900 shadow-lg transition-transform' />
            </div>
            <div className='relative mb-8'>
              <span className='absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-6xl text-sky-900 opacity-20 '>
                &ldquo;
              </span>
              <p className='text-gray-700 text-lg sm:text-lg md:text-lg leading-relaxed px-4 font-medium'>
                A delightful escape in every cup. The perfect balance of boldness and smoothness keeps me coming back for more.
              </p>
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 text-6xl text-stone-900 opacity-20 '>
                &rdquo;
              </span>
            </div>
            <div className='space-y-2'>
              <h3 className='text-2xl font-[playfair_Display] font-bold text-stone-900'>
                Bablu
              </h3>
              <p className='text-sm text-stone-600 uppercase tracking-widest'>
                Coffee Lover
              </p>
              <div className='w-full h-1 bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900 opacity-50 rounded-full mt-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial