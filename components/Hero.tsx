import React from 'react'
import Image from 'next/image'
import { photo,
  instagram,
  linkedin,
  github_icon,
   photo4, 
   photo1,
   photo3,
   back_photo 
   ,back_photo2} from '@/public/assets'
import AnimatedText from './AnimatedText'
import AnimatedPhoto from './AnimatedPhoto'

function Hero() {
  return (
    <main className='max-container relative flex justify-between flex-col items-center lg:flex-row lg:overflow-hidden lg:max-h-screen pt-16 pb-auto '>
        <div><Image className='  absolute hidden lg:block top-0 lg:right-0'  src={back_photo} alt='back'/></div>
        <div><Image className=' absolute -right-20 top-0 lg:right-0'  src={back_photo2} alt='back'/></div>

        <div className=' z-10 flex items-center justify-center w-2/3 lg:w-1/2 h-full'>
            <AnimatedPhoto/>
            <div>
              <Image className=' hidden lg:block absolute w-14 bottom-60 left-48 lg:bottom-5 lg:left-60 shadow-lg rounded-sm lg:w-20 hover:z-10 hover:scale-110 cursor-pointer' src={photo4} alt='photo'/>
              <Image className=' hidden lg:block absolute w-14 bottom-60 left-36 lg:bottom-5 lg:left-44 shadow-lg rounded-sm  lg:w-20 hover:z-10 hover:scale-110 cursor-pointer' src={photo3} alt='photo'/>
              <Image className=' hidden lg:block absolute w-14 bottom-60 left-24 lg:bottom-5 ;g:left-28 shadow-lg rounded-sm  lg:w-20 hover:z-10 hover:scale-110 cursor-pointer' src={photo1} alt='photo'/>
            </div>
        </div>

        <div className='flex items-center lg:justify-start justify-center ml-10 lg:w-1/2 my-10 '>
          <div className='w-full'>
            
            <h2 className='text-lg'>
               <span className='text-[#EF7857] text-2xl'>Hi..</span> | I"m Ahmed Faisal (Al-AlSheikh)
            </h2>
            <AnimatedText text='An experienced web developer that make all your online goals come true. 👋' />
            <p className='text-[#334155] mt-3'>So Take your time and look over my portfolio.</p>
            <div className='mt-3 flex gap-3'>
              <button className=' border-[1px] border-[#F07857] py-1 px-4 rounded-md text-xl hover:bg-[#F07857] hover:text-white'>
                Contact me
              </button>
    
              <div className=' flex items-center gap-3'>
                <Image src={instagram} alt='insgram' width={20} height={26}/>
                <Image src={linkedin} alt='linkedin' width={20} height={26}/>
                <Image src={github_icon} alt='linkedin' width={20} height={26}/>
              </div>
            </div> 
          </div>
        </div>
    </main>
  )
}

export default Hero