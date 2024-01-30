"use client"

import React from 'react'
import { photo } from '@/public/assets'
import Image from 'next/image'
import {motion} from 'framer-motion'


const qout ={

}

function AnimatedPhoto() {
  return (
    <motion.div 
     initial = {{y:50 ,opacity:0}}
     animate = {{y:0,opacity:1, transition:{duration:0.5 ,}}}
     className='sm:w-2/3 h-full'>
        <Image src={photo} alt='photo' />
        
    </motion.div>
  )
}

export default AnimatedPhoto