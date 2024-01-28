import React from 'react'
import '../App.css'
import imge1 from '../assets/img/imge1.avif'
import imge2 from '../assets/img/imge2.avif'
import imge3 from '../assets/img/imge3.avif'
import imge4 from '../assets/img/section2-1.avif'
import imge5 from '../assets/img/section2-2.avif'

export default function Section() {
  return (
    <section>
      {/* section1 */}
      <div className='w-[100%] lg:flex justify-center relative mt-20 ml-14 lg:ml-0  '>
        <div className='w-[80%] md:w-[70%] lg:w-[20%] relative mt-5'>
          <img className='w-[100%] rounded-xl' src={imge1} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[18px]'>Fully-jaw-dropping-electric. <i className="bi bi-arrow-right pl-5"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] lg:w-[20%]  rounded-xl relative lg:mx-10 mt-5 '>
          <img className='w-[100%] rounded-xl ' src={imge2} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>Two tracks combined at PECATL <i className="bi bi-arrow-right pl-3"></i></p>
        </div>
        <div className='w-[80%] md:w-[70%] lg:w-[20%]  rounded-xl relative mt-5 '>
          <img className='w-[100%] rounded-xl' src={imge3} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>The new Cayenne S E-Hybrid.<i className="bi bi-arrow-right pl-3"></i></p>
        </div>
      </div>
      {/* section2 */}
      <div className='w-[100%] h-[900px] flex flex-col items-center mt-32'>
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

        </div>
      </div>

    </section>
  )
}

