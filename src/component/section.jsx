import React from 'react'
import imge1 from '../assets/img/imge1.avif'
import imge2 from '../assets/img/imge2.avif'
import imge3 from '../assets/img/imge3.avif'

export default  function Section() {
  return (
    <section>
        <div className='w-[100%] flex justify-center mt-20 '>
            <div className='w-[30%] mr-[-80px]'><img className='w-[70%] rounded-xl' src={imge1} alt="" /></div>
            <div className='w-[30%] mr-[-80px]'><img className='w-[70%] rounded-xl' src={imge2} alt="" /></div>
            <div className='w-[30%] mr-[-80px]'><img className='w-[70%] rounded-xl' src={imge3} alt="" /></div>

        </div>

    </section>
  )
}

