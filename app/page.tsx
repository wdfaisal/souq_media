import Image from 'next/image'
import {motion} from "framer-motion"
import Hedear from '@/components/Hedear'
import Hero from '@/components/Hero'
import Cards from '@/components/Cards'
import Experience from '@/components/Experience'

import MabSection from '@/components/MabSection'
import Seiction from '@/components/Seiction'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import Libarry from '@/components/Libarry'
import AccountSection from '@/components/AccountSection'
import WebDesign from '@/components/WebDesign'
import Badges from '@/components/badges'
import FooterDoc from '@/components/FooterDoc'

export default function Home() {
  return (
    <div>
      <Hedear/>
      <Hero />
      <AboutSection/>
      <Seiction/>
      <Badges />
      
      <WebDesign/>
      <AccountSection/>
      <MabSection/>
      <FooterDoc/>
      <Footer/>
      
      
    </div>
   
  )
}
