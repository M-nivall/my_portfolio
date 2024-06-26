import React from 'react';
import { contactImg } from '../../assets';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ContactLeft() {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] t0-[#23272b] p-4 lgl:p-8 rounded-lg 
              shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img 
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
                />
               <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-designColor">@Michael Nivall</h3>
                    <p className="text-lg font-normal text-gray-400">
                    Front End Developer
                    </p>
                    <p className="text-base text-gray-400 tracking-wide">
                    Driven by a relentless pursuit of Excellence in the ever-evolving landscape of technology,
                    where innovation is the currency and agility is the key to success. With a deep-rooted passion
                    for problem-solving and a commitment to continous learning.
                    </p>
                    <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+254 745445459</span>
                    </p>
                    <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">nivahmichael@gmail.com</span>
                    </p>
               </div>
               <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                 </div>
               </div>
              </div>
  )
}

export default ContactLeft