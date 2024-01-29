import React, { useRef } from 'react'
import '../App.css'
import macan from '../assets/img/Macan.avif'
import model718 from '../assets/img/718.webp'
import model911 from '../assets/img/911.webp'
import cayenne from '../assets/img/cayenne.webp'
import macan2 from '../assets/img/macan.webp'
import panamera from '../assets/img/panamera.webp'
import taycan from '../assets/img/taycan.webp'


export default function Headers() {
    const hambrgr = useRef()
    function show(){
        hambrgr.current.classList.remove('ml-[-100%]')

    }
    function close(){
        hambrgr.current.classList.add('ml-[-100%]')

    }
    return (
        <header className=' relative'>
            <div className='w-full h-[100vh]'>
                <img className='w-full h-[100vh]' src={macan} alt="" />
            </div>
            <div className='w-[100%] absolute top-0 text-white pt-10 px-20'>
                <div className='flex justify-between'>
                    <div onClick={show} className='flex cursor-pointer'>
                        <i class="bi bi-list"></i>
                        <p>Menu</p>
                    </div>
                    <p className='text-[20px] lg:text-[30px]'>PORSCHE</p>
                    <i className="bi bi-person text-[20px]"></i>
                </div>
            </div>
            <div className='text-[40px] lg:text-[90px] text-white absolute bottom-52 px-20 lg:px-32'>01/25/2024</div>
            <button className=' absolute bottom-40  text-white border border-white px-6 py-3 mx-20 lg:mx-32'>Electrify Now</button>
            {/* hamderger menu */}
            <div ref={hambrgr} className='flex w-[100%] h-[100vh] absolute top-0 transitionR ml-[-100%]'>
                <div className='w-[80%] lg:w-[50%] h-[100vh] bg-white flex'>
                    <div className='w-[50%] p-10'>
                        <ul>
                            <li className='flex justify-between lg:text-[19px] font-medium mt-10'>Models <i class="bi bi-chevron-right text-end"></i></li>
                            <li className='flex justify-between  lg:text-[19px] font-medium mt-10'>Shopping Tools <i class="bi bi-chevron-right"></i></li>
                            <li className='flex justify-between  lg:text-[19px] font-medium mt-10'>Porsche Shop <i class="bi bi-chevron-right"></i></li>
                            <li className='flex justify-between lg:text-[19px] font-medium mt-10'>Services <i class="bi bi-chevron-right"></i></li>
                            <li className='flex justify-between lg:text-[19px] font-medium mt-10'>Experience <i class="bi bi-chevron-right"></i></li>
                            <li className='flex justify-between lg:text-[19px] font-medium mt-10'>Find Your Porsche <i class="bi bi-chevron-right"></i></li>
                            <li className='flex justify-between lg:text-[19px] font-medium mt-10'>My Porsche <i className="bi bi-chevron-right"></i></li>
                        </ul>
                    </div>
                    <div className='w-[50%] bg-gray-300 p-10 lg:pl-24'>
                        <img src={model718} alt="" />
                        <img src={model911} alt="" />
                        <img src={cayenne} alt="" />
                        <img src={macan2} alt="" />
                        <img src={panamera} alt="" />
                        <img src={taycan} alt="" />
                    </div>
                </div>
                <div className='w-[20%] lg:w-[50%] h-[100vh] bg-[#000000a2]'>
                    <p onClick={close} className='lg:w-[9%] lg:text-[40px] font-bold text-center text-white border border-white cursor-pointer px-2  m-5'><i class="bi bi-x"></i></p>
                </div>
            </div>
        </header>
    )
}
