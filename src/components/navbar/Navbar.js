import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { my_logo } from '../../assets/index'
import { navLinksdata } from '../../constants';
import cv from '../../assets/Michael_Nivah_CV.pdf';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full h-[70px] sticky pr-4 top-0 z-50 bg-bodyColor max-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>

      {/* LOGO */}
      <div>
        <img src={my_logo} className='w-[60px] h-[60px] rounded-full' alt='my_logo'/>
      </div>

      {/* DESKTOP MENU */}
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>

          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}



        </ul>

        {/* MOBILE MENU ICON */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'
        >
          <FiMenu />
        </span>

        {/* MOBILE MENU */}
        {showMenu && (
          <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>

            <div className='flex flex-col gap-8 py-2 relative'>

              {/* LOGO */}
              <div>
                <img src={my_logo} className='w-[70px] h-[70px] rounded-full' alt='my_logo'/>
              </div>

              {/* LINKS */}
              <ul className='flex flex-col gap-4'>
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass='active'
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

                {/* DOWNLOAD CV (MOBILE) */}
                <li>
                  <a
                    href={cv}
                    download="Michael_Nivah_CV.pdf"
                    onClick={() => setShowMenu(false)}
                    className="inline-block mt-4 px-4 py-2 bg-designColor text-black rounded-full font-semibold text-center"
                  >
                    Download CV
                  </a>
                </li>
              </ul>

              {/* SOCIAL ICONS */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                  <span className="bannerIcon"><FaFacebookF /></span>
                  <span className="bannerIcon"><FaTwitter /></span>
                  <span className="bannerIcon"><FaLinkedinIn /></span>
                </div>
              </div>

              {/* CLOSE ICON */}
              <span
                onClick={() => setShowMenu(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
              >
                <MdClose />
              </span>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar;