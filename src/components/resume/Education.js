import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard';
function Education() {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
    className='w-full font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
    <div>
    <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px]'>2008-2024</p>
    <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
   </div>
   <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="Bcs in Computer Science"
      subTitle="Kenya Methodist University(2021-2024)"
      result="3.25/4"
      des="Studied barchelor of degree in Computer Information Systems at Kenya Methodist University
      and scored Second Class Owner Upper Division."
    />
     <ResumeCard
      title="High School"
      subTitle="Kivaywa Boys High School(2016-2019)"
      result="B Plain"
      des="Went to Kivaywa Boys High School and attained a mean grade of B plain in 
      Kenya Certificate Of Secondary Education."
    />
     <ResumeCard
      title="Primary School"
      subTitle="Vuyika Primary School(2008-2015)"
      result="321"
      des="Studied primary education at Vuyika primary school and scored total marks of 321
      in Kenya Certificate of Primary Education."
    />
   </div>
  </div>
  <div>
  <div>
    <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px]'>
      20024-2025
    </p>
    <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
   </div>
   <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="Software Engineer"
      subTitle="Kakamega Revenue Agency(2023-Present)"
      result="Succeded"
      des="Attained Job experience at Kakamega Revenue Agency as Software Engineer Whereby i designed and 
      developed an Advertising website for the Agency."
    />
     <ResumeCard
      title="Web Developer"
      subTitle="Angle Developer Teams(2022-2023)"
      result="Succeded"
      des="Attended an online training workshop for web development for Angle Developer Teams using react framework."
    />
     <ResumeCard
      title="Mobile App Development"
      subTitle="KeMU Innovators Club(2023)"
      result="Succeded"
      des="Attended Android App workshop training at Kenya Methodist Uiversity using Java as a programming language."
    />
   </div>
  </div>
  </div>
  </motion.div>
  )
}

export default Education