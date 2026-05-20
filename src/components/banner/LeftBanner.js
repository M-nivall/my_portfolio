import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Engineer.", "Mobile App Developer.", "Web Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
    delaySpeed: 5000,
  });

  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>

        <h1 className='text-5xl font-bold text-white'>
          Hi, I'm{" "}
          <span className='text-designColor capitalize'>Michael Nivah</span>
        </h1>

        <h2 className='text-4xl font-bold text-white'>
          <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          I am a passionate Full-Stack Software Engineer specialised in Mobile Application Development using cross-platform technologies and modern frameworks.
          Skilled in React Native, Flutter, React, Next.js, JavaScript, Node.js, Java, and Python, I build scalable, responsive, and user-friendly mobile and web applications that solve real-world problems.
          I enjoy developing complete digital solutions from frontend interfaces to backend systems, with a strong focus on performance, clean architecture, and seamless user experiences.
          I am driven by innovation, creativity, and building impactful software solutions that help businesses and users achieve their goals efficiently.
        </p>
      </div>

      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            FIND ME IN
          </h2>

          <div className='flex gap-4'>
            <a
              href='https://www.facebook.com/michael.niva.1'
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>

            <a
              href='https://x.com/m_nivall'
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaTwitter />
            </a>

            <a
              href='https://www.linkedin.com/in/michael-nivah-b21677274/'
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            BEST SKILLS IN
          </h2>

          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <FaReact />
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
  )
}

export default LeftBanner