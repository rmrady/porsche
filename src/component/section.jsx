import React from 'react'
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
        <p className='text-[13px] text-gray-400  mt-4'>*Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.</p>
      </div>
      {/* section3 */}
      <div className='w-[100%]  my-20'>
        <div className='w-[100%] h-[400px] flex justify-center'>
          <div className='w-[30%] rounded-s-2xl bg-black text-white flex flex-col items-center justify-center'>
            <p className='text-[30px] font-bold '>Find Your Porsche Center</p>
            <p className='w-[70%] text-[14px] mt-3'>A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you.</p>
            <button className='px-10 py-3 bg-white text-black rounded-lg mt-5'>Search now</button>
          </div>
          <img className='w-[50%] rounded-e-2xl' src={imge3_1} alt="" />
        </div>

      </div>

    </section>
  )
}

