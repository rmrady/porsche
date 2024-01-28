import React from 'react'
import macan from '../assets/img/Macan.avif'


export default function Headers() {
    return (
        <header>
            <div className='w-full h-[100vh]'>
                <img className='w-full h-[100vh]' src={macan} alt="" />
            </div>
            <div className='w-[100%] absolute top-0 text-white pt-10 px-20'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <i class="bi bi-list"></i>
                        <p>Menu</p>
                    </div>
                    <p className='text-[20px] lg:text-[30px]'>PORSCHE</p>
                    <i className="bi bi-person text-[20px]"></i>
                </div>
            </div>
            <div className='text-[40px] lg:text-[90px] text-white absolute bottom-52 px-20 lg:px-32'>01/25/2024</div>
            <button className=' absolute bottom-40  text-white border border-white px-6 py-3 mx-20 lg:mx-32'>Electrify Now</button>
        </header>
    )
}
