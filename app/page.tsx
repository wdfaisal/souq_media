import Image from 'next/image'
import {motion} from "framer-motion"
import Hedear from '@/components/Hedear'
import Hero from '@/components/Hero'
import Cards from '@/components/Cards'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div>
      <Hedear />
      <Hero />
      <Cards />
      <Experience />
      <Experience />
      <Skills />
      
    </div>
   
  )
}
