import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import cv from '../../assets/Michael_Nivah_CV.pdf';

const Banner = () => {
  return (
    <section
      id='home'
      className='w-full py-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black relative'
    >

      {/* ✅ DOWNLOAD CV BUTTON (TOP RIGHT OF BANNER) */}
      <a
        href={cv}
        download="Michael_Nivah_CV.pdf"
        className="absolute top-4 right-6 z-10 px-5 py-2 bg-designColor text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Download CV
      </a>

      {/* LEFT + RIGHT CONTENT */}
      <LeftBanner />
      <RightBanner />

    </section>
  )
}

export default Banner