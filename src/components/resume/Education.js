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
      2023-Present
    </p>
    <h2 className='text-3xl md:text-4xl font-bold'>Certifications</h2>
   </div>
   <div className='mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="Mobile App Development Bootcamp"
      subTitle="KeMU Innovators Club(2023)"
      result="Completed"
      des="Attended Android App workshop training at Kenya Methodist Uiversity using Java as a programming language."
    />
     <ResumeCard
      title="Programming Essentials in Python"
      subTitle="Cisco Networking Academy"
      result="Completed"
      des="Completed Programming Essentials in Python, covering core programming concepts, data structures and problem solving."
    />
     <ResumeCard
      title="Programming Essentials in JavaScript"
      subTitle="Cisco Networking Academy"
      result="Completed"
      des="Completed Programming Essentials in JavaScript, covering core language fundamentals and building interactive logic."
    />
     <ResumeCard
      title="Programming Essentials in C++"
      subTitle="Cisco Networking Academy"
      result="Completed"
      des="Completed Programming Essentials in C++, covering syntax, memory concepts, and object-oriented programming basics."
    />
     <ResumeCard
      title="Certificate of Soft Skills"
      subTitle="BrighterMonday"
      result="Completed"
      des="Earned a Certificate of Soft Skills from BrighterMonday, covering communication, teamwork and professional workplace skills."
    />
   </div>
  </div>
  </div>
  </motion.div>
  )
}

export default Education
