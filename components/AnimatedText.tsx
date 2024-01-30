'use client'

import React from 'react'
import {motion} from 'framer-motion'

  interface props{
  text:string
  }

  const quote ={
    initial:{
      opacity:0,
    },
   animate:{
      opacity:1,
      transition:{
        
        staggerChildren: 0.05,
      }
  }
  }

const singleword={
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.8
    }
  }


}
function AnimatedText({text}:props) {
  return (
    <div className=' w-full mx-auto flex items-center justify-center  self-center'>
     <motion.h1 
     className=' inline-block w-full my-2 font-bold text-4xl lg:text-5xl capitalize' 
     variants={quote}
     initial='initial'
     animate="animate"
     
     >
      {
        text.split(' ').map((word,index) =>
        <motion.span key={word+"-"+index} className=' inline-block'
        variants={singleword}
        >
          {word}&nbsp;

        </motion.span>
        )
      }
      
    </motion.h1>

    </div>
  )
}

export default AnimatedText