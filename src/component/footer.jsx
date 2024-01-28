import React from 'react'
import usa from '../assets/img/images.jfif'

export default function Footer() {
  return (
    <footer>
      <div className='w-full  bg-black text-white p-20 mt-20'>
          <h4 className='text-[20px] font-bold'>Current Region / Language</h4>
          <div className='flex my-5'>
            <img className='w-[10%] lg:w-[2%]' src={usa} alt="" />
            <p className='text-[14px] mx-4'>United States / English</p>
            <span className='text-[14px] hover:text-red-600'>Change</span>
          </div>
          <div className='lg:w-[80%] mt-20 '>
            <ul className=' lg:flex justify-between'>
              <li className='lg:w-[25%]  font-bold text-[20px] mt-5'>Newsletter
                <ul>
                  <li className='text-[14px] mt-3'>Latest news directly in your inbox
                    <ul>
                      <li className=' mt-4'><button className='w-[100%] py-4  rounded-xl text-black bg-white'>Subscribe</button></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className='lg:w-[25%] font-bold text-[20px] mt-5'>Contact
                <ul>
                  <li className='text-[14px] mt-3'>Do you have any questions?
                    <ul>
                      <li className=' mt-4'><button className='w-[100%] py-4 rounded-xl text-black bg-white'>Contact Form</button></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='lg:w-[40%] font-bold text-[20px] mt-5'>Social Media
                <ul>
                  <li className='text-[14px] mt-3'>Get in touch with us via social media.
                    <ul className='mt-7'>
                      <li>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-facebook"></i></span>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-instagram"></i></span>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-pinterest"></i></span>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-youtube"></i></span>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-twitter-x"></i></span>
                        <span className='p-4 text-center bg-white text-black rounded-lg ml-3'><i class="bi bi-linkedin"></i></span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='lg:w-[60%] mt-10 pb-10'>
            <h2 className='font-bold text-[20px]'>Company</h2>
            <ul className='flex justify-between'>
              <li>
                <p className='text-[15px] pt-2  hover:text-red-600 '>Porsche at a Glance</p>
                <p className='text-[15px] pt-2  hover:text-red-600 '>Careers</p>
                <p className='text-[15px] pt-2  hover:text-red-600 '>Press</p>
              </li>
              <li>
                <p className='text-[15px] pt-2  hover:text-red-600'>Porsche at a Glance</p>
                <p className='text-[15px] pt-2  hover:text-red-600'>Partner Forum</p>
                <p className='text-[15px] pt-2  hover:text-red-600'>Contact</p>
              </li>
              <li>
                <p className='text-[15px] pt-2  hover:text-red-600'>Sustainability</p>
                <p className='text-[15px] pt-2  hover:text-red-600'>Affiliates</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className='mt-14'>
            <span>© 2024 Porsche Cars North America, Inc </span>
        
            <span className=' underline text-[15px] hover:text-red-600'>Legal notice. </span>
            <span className=' underline text-[15px] hover:text-red-600'>Privacy notice. </span>
            <span className=' underline text-[15px] hover:text-red-600'>California Privacy. </span>
            <span className=' underline text-[15px] hover:text-red-600'>Accessibility Statement. </span>
            <span className=' underline text-[15px] hover:text-red-600'>Open Source Software Notice. </span>
            <span className=' underline text-[15px] hover:text-red-600'> Do Not Sell or Share My Personal Information. </span>
            <span className=' underline text-[15px] hover:text-red-600'>Whistleblower System. Emergency Responders. </span>
            <span className=' underline text-[15px] hover:text-red-600'> Recall Information. </span>
            <span className=' underline text-[15px] hover:text-red-600'>3G Wireless Turndown FAQs. </span>
          </div>

          <div>
            <h1 className='text-[35px] font-bold font-mono text-center mt-28'>PORSCHE</h1>
          </div>

      </div>
    </footer>
  )
}
