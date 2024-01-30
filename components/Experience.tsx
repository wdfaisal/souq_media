"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { Certificate, back_3, meta_logo} from '@/public/assets';
import {motion, useScroll} from 'framer-motion'

interface experienceprops{
  title:string,
  date: string,
  company:string,
  logo ?:any,
  descrbtion:string,
}

function NewExperience({title,date,company,logo,descrbtion}:experienceprops){
  return(
    <motion.div 
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      className=' pl-5 w-[22rem] lg:w-1/2 my-12'
    >
        <h2 className=' font-bold text-xl'>{title}</h2>
        <h3 className=' flex items-center gap-2'>{date} |<span><Image src={logo} width={20} height={20} alt='logo'/> </span>{company} </h3>
        <p>{descrbtion}</p>

    </motion.div>
  )
}
 

function Experience() {

  const ref =useRef(null)

  const { scrollYProgress } = useScroll(
    {
      target :ref,
      offset : ["start center","center center"]
    }
  )
  return (
    <section  id='Experience' className='max-container relative my-10 w-full  min-h-screen  '>
      <div className=' absolute bottom-0 right-0 w-80'><Image src={back_3} alt='back'/></div>
      <div className='ml-5 flex items-center'>
        <Image src={Certificate} alt='Certificate'/>
        <h2 className=' xl:text-4xl text-3xl  '> 
        <span className=' text-left text-2xl text-cyan-'> Hi</span> <br /> 
        Certificate and Experience </h2>
      </div>
      
      <div ref={ref} className=' relative w-full mt-10 flex flex-col justify-center items-center '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=' absolute left-14 top-0 lg:left-32 lg:top-0 bg-black w-1 h-full origin-top'/>
        
        <NewExperience 
        title ='Meta Front End Profitinal Certefcat' 
        date='2023' company='Meta' 
        logo={meta_logo} 
        descrbtion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore explicabo dignissimos rerum consequuntur dolore debitis at. Corporis, magni? Nam.'
        />
         <NewExperience 
        title ='Meta Front End Profitinal Certefcat' 
        date='2023' company='Meta' 
        logo={meta_logo} 
        descrbtion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore explicabo dignissimos rerum consequuntur dolore debitis at. Corporis, magni? Nam.'
        />
        <NewExperience 
        title ='Meta Front End Profitinal Certefcat' 
        date='2023' company='Meta' 
        logo={meta_logo} 
        descrbtion='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore explicabo dignissimos rerum consequuntur dolore debitis at. Corporis, magni? Nam.'
        />
      

      </div>
    </section>
  )
}

export default Experience