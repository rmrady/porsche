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
      <div className='w-[100%] flex justify-center mt-20 relative '>
        <div className='w-[20%]  rounded-xl img1'>
          <img className='w-[100%]' src={imge1} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[18px]'>Fully-jaw-dropping-electric. <i className="bi bi-arrow-right pl-5"></i></p>
        </div>
        <div className='w-[20%]  rounded-xl mx-10 '>
          <img className='w-[100%]' src={imge2} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>Two tracks combined at PECATL <i className="bi bi-arrow-right pl-3"></i></p>
        </div>
        <div className='w-[20%]  rounded-xl img1'><img className='w-[100%]' src={imge3} alt="" />
          <p className=' absolute bottom-5 pl-5 text-white text-[16px]'>The new Cayenne S E-Hybrid.<i className="bi bi-arrow-right pl-3"></i></p>
        </div>
      </div>
      {/* section2 */}
      <div className='w-[100%] h-[900px] flex flex-col items-center mt-32'>
        <h2 className='text-center text-[45px] font-bold'>Models</h2>
        <div>
          {/* box1 */}
          <div className='flex justify-center relative'>
            <div className='w-[40%] h-[600px] overflow-hidden img1'>
              <img className='w-[100%]' src={imge4} alt="" />
            </div>
            <div className='w-[40%] h-[600px] overflow-hidden '>
              <img className='w-[100%]' src={imge5} alt="" />
            </div>
          </div>
          {/* box2 */}

        </div>
      </div>

    </section>
  )
}

