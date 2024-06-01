
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Slider() {
  return (
    <div className='container group px-6  mx-auto'>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        navigation={
            { nextEl : '.button-next-slide',
             prevEl : '.button-prev-slide'}
             
         }
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <div
      className=' bg-center bg-cover h-[38rem] '
      
    >
      <div className='flex flex-col-reverse gap-y-6 lg:flex-row items-center justify-around w-full h-full  px-16  bg-gray-900/70'>
        <div className='max-w-lg'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Plan Your next trip <br /> with <span className='text-[#cbb164] logo'> BackPackers</span>.
          </h1>
          
        </div>
        <div>
         <img src={slide1} alt="" className='w-96 rounded-2xl shadow-2xl' />
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide>  <div
      className=' bg-center bg-cover h-[38rem] '
      
    >
      <div className='flex flex-col-reverse gap-y-6 lg:flex-row items-center justify-around w-full h-full  px-16  bg-gray-900/70'>
        <div className='max-w-lg'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Explore   <span className='text-[#cbb164] logo'> Bangladesh <br /> </span>with new perspective
          </h1>
          
        </div>
        <div>
         <img src={slide2} alt="" className='w-96 rounded-2xl shadow-2xl' />
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide>  <div
      className=' bg-center bg-cover h-[38rem] '
      
    >
      <div className='flex flex-col-reverse gap-y-6 lg:flex-row items-center justify-around w-full h-full  px-16  bg-gray-900/70'>
        <div className='max-w-lg'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
           Know the unknown <br /> tricks of <span className='text-[#cbb164] logo'> BackPacking</span>.
          </h1>
          
        </div>
        <div>
         <img src={slide3} alt="" className='w-96 rounded-2xl shadow-2xl' />
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide>  <div
      className=' bg-center bg-cover h-[38rem] '
      
    >
      <div className='flex flex-col-reverse gap-y-6 lg:flex-row items-center justify-around w-full h-full  px-16  bg-gray-900/70'>
        <div className='max-w-lg'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Everything you need    to make<br />  the most of your visit <br /> to <span className='text-[#cbb164] logo'> Bangladesh</span>
          </h1>
          
        </div>
        <div>
         <img src={slide4} alt="" className='w-96 rounded-2xl shadow-2xl' />
        </div>
      </div>
    </div></SwiperSlide>
        
        
    <div className='button-prev-slide w-10 h-10 bg-[#3e939b] text-white flex justify-center items-center absolute  z-10 -left-52 group-hover:left-0 top-[45%] duration-300 shadow-xl'>
        <FaArrowLeft className='' />
        </div>
        <div className='button-next-slide w-10 h-10 bg-[#3e939b] text-white flex justify-center items-center absolute  z-10 -right-52   group-hover:right-0 top-[45%] duration-300 shadow-xl'> 
        <FaArrowRight className='' />
        </div>
        
       
      </Swiper>
    </div>
  );
}
