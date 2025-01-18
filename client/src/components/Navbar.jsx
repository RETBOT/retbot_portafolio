import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinksEn, navLinksEs } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ language, toggleLanguage }) => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [navLinks, setNavLinks] = useState(navLinksEs);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavLinks(language !== 'en' ? navLinksEn : navLinksEs)
  }, [language])

  

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-full mx-auto'>
        <Link
          to='/' max-w-full
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Roberto&nbsp;<span className='sm:block hidden'>&nbsp;|&nbsp;Software Developer.</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-4'>
          {
            navLinks.map((nav) => (
              <li
                key={nav.id}
                
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`} 
                  className={`${active === nav.id ? "text-selected" : "text-no_selected"
                  } hover:text-selected text-[18px] font-medium cursor-pointer no-underline`}
                 >{nav.title}</a>
              </li>
            ))
          }
          <li>
             <a
                href='#idioma'
                role="button"
                className={`text-no_selected hover:text-selected text-[18px] font-medium cursor-pointer no-underline`}
                onClick={(e) => {
                  e.preventDefault(); 
                  toggleLanguage();
                }}
              >
                {language !== 'en' ? 'English' : 'Español'}
              </a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                 <li
                 key={nav.id}
                 
                 onClick={() => setActive(nav.id)}
               >
                 <a href={`#${nav.id}`} 
                   className={`${active === nav.id ? "text-selected" : "text-no_selected"
                   } hover:text-selected text-[18px] font-medium cursor-pointer no-underline`}
                  >{nav.title}</a>
               </li>
              ))}
              <li>
                <a
                    href='#idioma'
                    role="button"
                    className={`text-no_selected hover:text-selected text-[18px] font-medium cursor-pointer no-underline`}
                    onClick={(e) => {
                      e.preventDefault(); 
                      toggleLanguage();
                    }}
                  >
                  {language !== 'en' ? 'English' : 'Español'}
                </a>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
