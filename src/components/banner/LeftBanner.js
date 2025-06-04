import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
 import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaPython,FaJava } from "react-icons/fa";
 import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Software Engineer:", "Android Developer.", "Web Developer."],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 60,
        deelaySpeed: 5000,
      });
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
        <h1 className='text-5xl font-bold text-white'>
            Hi, I'm {" "}
            <span className='text-designColor capitalize'>Michael Nivall</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
            <span>{text}</span>
            <Cursor
            cursorBlinking = "false"
            cursorStyle = "|"
            cursorColor="#ff014f"/>
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
         As an emerging software engineer, I am passionate about leveraging technology to solve real-world problems.
         Proficient in programming with a solid foundation in Mobile App Development,
          Web Development, and Networking, I thrive in dynamic environments where creativity and innovation
           are valued. With excellent communication and problem-solving skills, I am eager to contribute my
            technical expertise and enthusiasm for learning to a collaborative team...
        </p>
    </div>
    <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
     <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>
        Find me in
      </h2>
      <div className='flex gap-4'>
        <a 
          href='https://www.facebook.com/michael.niva.1'
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon">
          <FaFacebookF/>
        </a>
        <a 
          href='https://x.com/m_nivall'
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon">
          <FaTwitter/>
        </a>
        <a 
          href='https://www.linkedin.com/in/michael-nivah-b21677274/'
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon">
          <FaLinkedinIn/>
        </a>
      </div>
      </div>
      <div>
      <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>
        BEST SKILLS IN
      </h2>
      <div className='flex gap-4'>
        <span className='bannerIcon'>
          <FaReact/>
        </span>
        <span className='bannerIcon'>
          <FaPython />
        </span>
        <span className='bannerIcon'>
        <IoLogoJavascript />
        </span>
        <span className='bannerIcon'>
        <FaJava />
        </span>
      </div>
      </div>
      </div>
    </div>
</div>
  )
}

export default LeftBanner