"use client"

import React from 'react'
import Image from 'next/image'
import photo from "../public/assets/photo 1.png"
import  icon2  from '@/public/assets/idea.png'
import icon from '@/public/assets/laptop.png'
import NavMenu from '@/components/NavMenu'
function Seiction() {
  return (
    <section className='bg-[#957DC7] py-10 px-5 '>
        <div className=' max-container w-full h-full flex flex-col lg:flex-row justify-between items-center mx-auto '>
            <div className='flex justify-center items-center lg:w-1/2'>
                <Image src={photo} alt="hero" />
            </div>
            <div className=' items-start mt-10 mr-3 lg:w-1/2'>
              <h1 className=' text-md text-gray-700'>باقات التسويق</h1>
                <h1 className=' text-white font-bold text-4xl tracking-tighter'>صمم باقتك التسويقيقيه على كيفك ؟</h1>
                <p className=' text-lg font-medium text-gray-700 tracking-tighter mt-2'>اختار من مختلف الخيارات لتصميم باقتك على كيفك  </p>
                 <div className=' flex flex-col mt-4'>
                    <div className=' flex flex-row items-center gap-2  py-3 px-2'> 
                      <Image
                       src={icon}
                        className=' w-10'
                         alt='icon'
                      />
                      <div>
                        <h2 className='text-white text-lg tracking-tighter font-bold'>اختار المنصه اللي تناسبك ؟</h2>
                        <p className=' text-md tracking-tighter text-gray-700 w-96 '>اختار من مختلف المنصات فيسبوك انستقرام تيك توك المنصه اللي تناسبك عملك</p>
                      </div>

                    </div>
                    <div className=' flex flex-row items-center gap-2 py-3 px-2'> 
                      <Image src={icon2} className=' w-10' alt='icon'/>
                      <div>
                        <h2 className=' text-white  text-lg tracking-tighter font-bold'>اختار جمهورك المستهدف</h2>
                        <p className=' text-md tracking-tighter text-gray-700 w-96 '>اختار من مختلف المنصات فيسبوك انستقرام تيك توك المنصه اللي تناسبك عملك</p>
                      </div>

                    </div>
                    <div className=' flex items-end '>
                     
                      <button  className=' text-white shadow-sm mt-5 ml-2 text-md text-center border-2 py-2 px-5 tracking-tighter rounded-full'>اطلق حملتك الأن</button>
                      
                     </div>
                 </div>
                 

                 
            </div>

        </div>

    </section>
  )
}

export default Seiction