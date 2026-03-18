import CB from '../assets/CB.png'
import Extraordinary from '../assets/Extraordinary.png'
import Badge from '../assets/Badge.png'
import Price from '../assets/Price.png'

const Card = ({ bg, iconBg, icon, alt, title, text, borderColor, titleColor, textColor, invert }) => (
  <div className={`relative ${bg} p-8 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 `}>
    <div className='relative z-10'>
      <div className='mb-6 flex justify-center'>
        <div className={`w-24 h-24 ${iconBg} rounded-full flex items-center justify-center shadow-md`}>
          <img src={icon} alt={alt} className={`w-14 h-14 ${invert ? "filter brightness-0 invert" : ""}`}/>
        </div>
      </div>
      <h3 className={`text-xl sm:text-2xl md:text-2xl font-serif font-bold ${titleColor} mb-4 text-center`}>
        {title}
      </h3>
      <p className={`text-center text-sm sm:text-base md:text-lg font-medium italic leading-relaxed ${textColor}`}>
        {text}
      </p>
    </div>
    <div className='mt-4' style={{borderTop: `2px dashed ${borderColor}`}} />
  </div>
)

const AboutUs = () => {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[antiquewhite] to-[wheat]'>
      <div className='max-w-7xl mx-auto text-center mb-16 flex flex-col items-center'>
        <img src={CB} alt="Coffee Beans" className='w-16 h-16 mb-4'/>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-[saddlebrown] mb-4'>
          Why Choose Us?
        </h1>
        <p className=''>
          Craft moments of perfection in  every cup
        </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          <Card bg="bg-white"
          iconBg="bg-[saddlebrown]"
          icon={CB}
          alt="Beans"
          invert
          title ="Premium Quality"
          text="Ethically sourced Arabian beans, roasted to perfection"
          borderColor="saddlebrown"
          titleColor="text-[saddlebrown]"
          textColor="text-[rosybrown]" 
          />

          <Card bg="bg-gradient-to-b from-[saddlebrown] to-[sienna]"
          iconBg="bg-white"
          icon={Price}
          alt="Price"
          title ="Fair Pricing"
          text="Premium quality at honest price"
          borderColor="burlywood"
          titleColor="text-white"
          textColor="text-[burlywood]" 
          />

          <Card bg="bg-white"
          iconBg="bg-[saddlebrown]"
          icon={Extraordinary}
          alt="Flavors"
          invert
          title ="Unique Flavors"
          text="Artisan blends crafted by master roasters"
          borderColor="saddlebrown"
          titleColor="text-[saddlebrown]"
          textColor="text-[rosybrown]" 
          />

          <Card bg="bg-gradient-to-b from-[saddlebrown] to-[sienna]"
          iconBg="bg-white"
          icon={Badge}
          alt="Badge"
          title ="Award Winning"
          text="Recognized for excellence in every cup"
          borderColor="burlywood"
          titleColor="text-white"
          textColor="text-[burlywood]" 
          />
        </div>

        <div className='max-w-4xl mx-auto mt-20 text-center'>
          <div className='relative bg-gradient-to-r from-[saddlebrown] to[sienna] p-1 rounded-3xl shadow-2xl overflow-hidden'>
            <div className='absolute inset-0 opacity-10' />

            <div className='bg-[antiquewhite] p-8 rounded-2xl relative z-10 mx-1 my-1'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[saddlebrown] mb-6 leading-tight '>
                Start Your Coffee Journey With Us Today!
              </h2>
              <button className=' bg-gradient-to-r from-[saddlebrown] to-[sienna] text-white text-base sm:text-lg md:text-xl px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium hover:scale-105 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-[saddlebrown] '>
                Join Us &rarr;
              </button>
              <p className='mt-4 text-[rosybrown] font-medium italic text-sm sm:text-base md:text-xl leading-relaxed'>
                Join 50,000+ coffee lovers worldwide.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs