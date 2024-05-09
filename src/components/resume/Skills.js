import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard';

function Skills() {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
    className='py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
    <div className='w-full lgl:w-1/2'>
    <div className='font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
    <h2 className='text-3xl md:text-4xl font-bold'>Design Skills</h2>
   </div>
   <div className='mt-14 w-full flex flex-col gap-5'>
   <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Photoshot</p>
      <motion.span 
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-full h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>100%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Figma</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[90%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>90%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Adobe Xd</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>60%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Adobe Illustartor</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[70%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>70%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Design</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[99%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>99%</span>
        </span>
      </motion.span>
    </div>
   </div>
  </div>
  <div className='w-full lgl:w-1/2'>


  <div className='w-full'>
    <div className='font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px] uppercase'>
      Features
    </p>
    <h2 className='text-3xl md:text-4xl font-bold'>Development Skills</h2>
   </div>
   <div className='mt-14 w-full flex flex-col gap-5'>
   <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>React</p>
      <motion.span 
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-full h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>100%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Java</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[95%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>95%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Javascript</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[90%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>90%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>Python</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[80%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>80%</span>
        </span>
      </motion.span>
    </div>
    <div className="overflow-x-hidden">
      <p className='text-sm uppercase font-medium'>html & Tailwind CSS</p>
      <motion.span
       initial={{ x: "-100%", opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
      className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
        <span className='w-[99%] h-full bg-gradient-to-r from-blue-600 via pink-500 to-red-500 
        rounded-md relative'>
          <span className='absolute -top-7 right-0'>99%</span>
        </span>
      </motion.span>
    </div>
   </div>
  </div>
  </div>
</motion.div>
  )
}

export default Skills