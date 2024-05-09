import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign  } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id='features' className='w-full py-20  border-b-[1px] border-b-black'>
      <Title title="Features" des="what i do"/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card
        title="App Development"
        des="Crafting mobile apps for seamless user experiences and robust functionalities."
        icon={<FaMobile/>}/>
        <Card 
         title="Web Development"
         des="Creating websites with modern tech for great user experience and functionality."
         icon={<CgWebsite />}/>
         <Card 
         title="Web Design"
         des="Designing engaging, user-friendly websites for optimal digital experiences and customer satisfaction."
         icon={<CgWebsite />}/>
         <Card 
         title="Cyber Security"
         des="Protecting digital assets from threats, ensuring data integrity and user privacy."
         icon={<FaGlobe/>}/>
         <Card 
         title="Networking"
         des="Establishing reliable connections and optimizing network performance for seamless communication and data transfer."
         icon={<SiAntdesign/>}/>
         <Card 
         title="Backened Management"
         des="Experienced in efficient backend management for reliable systems and data integrity."
         icon={<SiProgress/>}/>
      </div>
     </section>
  )
}

export default Features