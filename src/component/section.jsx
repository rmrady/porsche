import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiper.css';
import '../App.css'
import imge1 from '../assets/img/imge1.avif'
import imge2 from '../assets/img/imge2.avif'
import imge3 from '../assets/img/imge3.avif'
import imge4 from '../assets/img/section2-1.avif'
import imge5 from '../assets/img/section2-2.avif'
import imge6 from '../assets/img/section2-3.avif'
import imge7 from '../assets/img/section2-4.avif'
import imge8 from '../assets/img/section2-5.avif'
import imge9 from '../assets/img/section2-6.avif'
import imge3_1 from '../assets/img/section3-1.avif'
import imge3_2 from '../assets/img/section3-2.avif'
import imge3_3 from '../assets/img/section3-3.avif'
import imge3_4 from '../assets/img/section3-4.avif'
import imge3_5 from '../assets/img/section3-5.avif'
import imge3_6 from '../assets/img/section3-6.avif'
import imge3_7 from '../assets/img/section3-7.avif'
import imge3_8 from '../assets/img/section3-8.avif'
import imge3_9 from '../assets/img/section3-9.avif'
import imge3_10 from '../assets/img/section3-10.avif'
import imge3_11 from '../assets/img/section3-11.avif'
import imge3_12 from '../assets/img/section3-12.avif'

export default function Section() {
  return (
    <section>
      {/* section1 */}
      <div className='w-[100%] lg:flex justify-center relative mt-20 ml-14 lg:ml-0  '>
        <div className='w-[80%] md:w-[70%] xl:w-[20%] relative mt-5'>
          <img className='w-[100%] rounded-xl' src={imge1} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[18px]'>Fully-jaw-dropping-electric. <i className="bi bi-arrow-right pl-5"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] xl:w-[20%]  rounded-xl relative lg:mx-10 mt-5 '>
          <img className='w-[100%] rounded-xl ' src={imge2} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>Two tracks combined at PECATL <i className="bi bi-arrow-right pl-3"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] xl:w-[20%]  rounded-xl relative mt-5 '>
          <img className='w-[100%] rounded-xl' src={imge3} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>The new Cayenne S E-Hybrid.<i className="bi bi-arrow-right pl-3"></i></p>
        </div>
      </div>
      {/* section2 */}
      <div className='w-[100%] flex flex-col items-center mt-32'>
        <h2 className='text-center text-[45px] font-bold mb-10'>Models</h2>
        <div>
          {/* box1 */}
          <div className=' w-[100%] lg:flex justify-center ml-14 lg:ml-0'>
            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 lg:mr-10 '>
              <img className='w-[100%]' src={imge4} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>718</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>The mid-engine sports car for two made for pure driving pleasure.</p>
                <p className='text-white text-[17px] pt-3'>From $ 68,300 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your 718</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All 718 models</button>
              </div>
            </div>

            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 '>
              <img className='w-[100%]' src={imge5} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>911</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>The iconic, rear-engine sports car with exceptional performance.</p>
                <p className='text-white text-[17px] pt-3'>From $ 114,400 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your 911</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All 911 models</button>
              </div>
            </div>
          </div>
          {/* box2 */}
          <div className=' w-[100%] lg:flex justify-center mt-10 ml-14 lg:ml-0'>
            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 lg:mr-10 '>
              <img className='w-[100%]' src={imge6} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>Taycan</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>The pure expression of an electric sports car with motorsport performance.</p>
                <p className='text-white text-[17px] pt-3'>From $ 90,900 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your Taycan</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All Taycan models</button>
              </div>
            </div>

            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 '>
              <img className='w-[100%]' src={imge7} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>Panamera</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>The sports car limousine for an active lifestyle with highest comfort.</p>
                <p className='text-white text-[17px] pt-3'>From $ 99,900 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your Panamera</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All Panamera models</button>
              </div>
            </div>
          </div>
          {/* box3 */}
          <div className=' w-[100%] lg:flex justify-center mt-10 ml-14 lg:ml-0'>
            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 lg:mr-10 '>
              <img className='w-[100%]' src={imge8} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>Masan</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>All-electric SUV with impressive E-Performance.</p>
                <p className='text-white text-[17px] pt-3'>From $ 78,800 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your Masan</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All Masan models</button>
              </div>
            </div>

            <div className='w-[80%] lg:w-[40%]  relative overflow-hidden rounded-2xl mt-5 '>
              <img className='w-[100%]' src={imge9} alt="" />
              <p className='text-white text-[25px] absolute top-5 font-black  font-sans pl-10'>Cayenne</p>
              <div className='absolute bottom-10 pl-10'>
                <p className='text-white text-[19px]'>The versatile SUV with sports car performance and up to five seats.</p>
                <p className='text-white text-[17px] pt-3'>From $ 79,200 *</p>
                <button className='w-[90%] bg-white text-black rounded-lg hover:opacity-40 transitionR py-3 mt-4'>Build your Cayenne</button>
                <button className='w-[90%] bg-[#0000006c] text-white border border-white rounded-lg hover:opacity-40 transitionR py-3 mt-4'>All Cayenne models</button>
              </div>
            </div>
          </div>
        </div>
        <p className='w-[50%] lg:w-[60%] text-[13px] text-gray-400  mt-4'>*Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.</p>
      </div>
      {/* section3 */}
      <div className='w-[100%]  my-20'>
        <div className='w-[100%] h-[400px] flex justify-center'>
          <div className='w-[30%] rounded-s-2xl bg-black text-white flex flex-col items-center justify-center'>
            <p className='text-[20px] lg:text-[30px] font-bold '>Find Your Porsche Center</p>
            <p className='w-[70%] text-[14px] mt-3'>A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you.</p>
            <button className='px-10 py-3 bg-white text-black rounded-lg mt-5'>Search now</button>
          </div>
          <img className='w-[50%] rounded-e-2xl' src={imge3_1} alt="" />
        </div>
      </div>
      {/* section4 */}
      <div className='w-full lg:flex '>
        <div className='lg:w-[50%] flex flex-col justify-center ml-44'>
          <h2 className='w-[70%] text-[30px] font-bold'>find your new or pre-owned Porsche</h2>
          <p className='w-[70%]  text-[14px] mt-4'>Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.</p>
          <p className='text-[14px] mt-10'> Enter a location for your search</p>
        </div >
        <img className='lg:w-[50%] lg:mt-20' src={imge3_2} alt="" />

      </div>
      {/* section5 */}
      <div className=' h-[600px] flex flex-col items-center cursor-pointer  mt-10'>
        <h2 className='text-[40px] font-bold'>Online Shop Highlights</h2>
        {/* rsponsive md-------------- */}
        <div className='w-[90%] h-[300px] mb-20 mt-10 text-center md:hidden'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl mt-5' src={imge3_3} alt="" />
                <h2 className='font-bold mt-3'>Porsche Wall Charger Connect</h2>
                <p className='text-[14px] mt-3'>An easy charging solution for your home.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Charger</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_4} alt="" />
                <h2 className='font-bold mt-3'>Porsche x Garmin® Epix smartwatch</h2>
                <p className='text-[14px] mt-3'>GPS multisport smartwatch with unique Porsche details.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>smartwatch</p>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_5} alt="" />
                <h2 className='font-bold mt-3'>Porsche eBike Cross Performance</h2>
                <p className='text-[14px] mt-3'>High-performance electric mountain bike from Porsche.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>eBike</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_6} alt="" />

                <h2 className='font-bold mt-3'>Golf Cartbag – Sport</h2>
                <p className='text-[14px] mt-3'>Spacious cart bag made of waterproof nylon with padded shoulder strap and lined inner pocket.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Cartbag</p>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_7} alt="" />
                <h2 className='font-bold mt-3'>Wheel rim wall clock – Porsche Originals</h2>
                <p className='text-[14px] mt-3'>Wall clock made from the original rim of a 911 in RS Spyder design..</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>clock</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_8} alt="" />
                <h2 className='font-bold mt-3'>Porsche Poster Set – The Porsche Jump</h2>
                <p className='text-[14px] mt-3'>Powerful motifs and high-quality printing: the limited-edition poster sets portray various Porsche models.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>PosterSet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_9} alt="" />
                <h2 className='font-bold mt-3'>Barrel seat – Porsche Penske Motorsport</h2>
                <p className='text-[14px] mt-3'>Stylish Porsche barrel seat with high-quality film wrapping. Suitable for indoor and outdoor use.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Barrelseat</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* rsponsive lg-------------- */}
        <div className=' hidden md:block w-[90%] h-[300px]  mb-20 mt-10'>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl mt-5' src={imge3_3} alt="" />
                <h2 className='font-bold mt-3'>Porsche Wall Charger Connect</h2>
                <p className='text-[14px] mt-3'>An easy charging solution for your home.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Charger</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_4} alt="" />
                <h2 className='font-bold mt-3'>Porsche x Garmin® Epix smartwatch</h2>
                <p className='text-[14px] mt-3'>GPS multisport smartwatch with unique Porsche details.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>smartwatch</p>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_5} alt="" />
                <h2 className='font-bold mt-3'>Porsche eBike Cross Performance</h2>
                <p className='text-[14px] mt-3'>High-performance electric mountain bike from Porsche.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>eBike</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_6} alt="" />

                <h2 className='font-bold mt-3'>Golf Cartbag – Sport</h2>
                <p className='text-[14px] mt-3'>Spacious cart bag made of waterproof nylon with padded shoulder strap and lined inner pocket.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Cartbag</p>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_7} alt="" />
                <h2 className='font-bold mt-3'>Wheel rim wall clock – Porsche Originals</h2>
                <p className='text-[14px] mt-3'>Wall clock made from the original rim of a 911 in RS Spyder design..</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>clock</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_8} alt="" />
                <h2 className='font-bold mt-3'>Porsche Poster Set – The Porsche Jump</h2>
                <p className='text-[14px] mt-3'>Powerful motifs and high-quality printing: the limited-edition poster sets portray various Porsche models.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>PosterSet</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className='w-[100%] rounded-xl' src={imge3_9} alt="" />
                <h2 className='font-bold mt-3'>Barrel seat – Porsche Penske Motorsport</h2>
                <p className='text-[14px] mt-3'>Stylish Porsche barrel seat with high-quality film wrapping. Suitable for indoor and outdoor use.</p>
                <p className=' mt-3'><i class="bi bi-arrow-right"></i>Barrelseat</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
      {/* section6 */}
      <h2 className='text-[40px] font-bold text-center my-10'>Discover</h2>
      <div className='w-[100%] lg:flex  justify-center relative mt-20 ml-14 lg:ml-0  '>
        <div className='w-[80%] md:w-[70%] xl:w-[23%] relative mt-5'>
          <img className='w-[100%] rounded-xl' src={imge3_10} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[19px] font-bold'>Travel & Experience<i className="bi bi-arrow-right pl-5"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] xl:w-[23%]  rounded-xl relative lg:mx-10 mt-5 '>
          <img className='w-[100%] rounded-xl ' src={imge3_11} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[19px] font-bold'>Porsche Approved<i className="bi bi-arrow-right pl-3"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] xl:w-[23%]  rounded-xl relative mt-5 '>
          <img className='w-[100%] rounded-xl' src={imge3_12} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[19px] font-bold'>Motorsport Experience<i className="bi bi-arrow-right pl-3"></i></p>
        </div>
      </div>

    </section>
  )
}

