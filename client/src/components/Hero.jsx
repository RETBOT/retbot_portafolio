import { useEffect, useState } from 'react'
import { styles } from "../styles"

const Hero = ({ language, esTelefono }) => {
  const [saludo, setSaludo] = useState('Hola, soy');
  const [dev, setDev] = useState('Desarrollador de Software ');

  useEffect(() => {
    setSaludo(language !== 'en' ? `Hi, I'm` : 'Hola, soy');
    setDev(language !== 'en' ? "Software Developer." : 'Desarrollador de Software.');
  }, [language])

  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-center items-center`}>
      <div className={` max-w-screen-2xl ${styles.paddingX} flex flex-row items-start gap-5 flex-wrap`}>
        <div className="flex flex-row">
          <div className='flex flex-col justify-center items-center mt-5 mr-5'>
            <div className='w-5 h-5 rounded-full bg-title' />
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-title to-title-500/0.5' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {saludo} <span className='text-title'>Roberto <br className='sm:block hidden' />Esquivel Troncoso</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {dev} <br className='sm:block hidden' />
            </p>
            <div className='flex flex-row'>
              <div className="flex w-10 h-10 rounded-full bg-[#FFFFFF] justify-center items-center">
                <div className="group flex relative">
                  <a
                    href="https://www.facebook.com/robertoesquiveltroncoso" className="no-underline text-primary hover:text-primary-100" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">FACEBOOK</span>
                </div>
              </div>
              <div className="mr-2" />
              <div className="flex w-10 h-10 rounded-full bg-[#FFFFFF] justify-center items-center ">
                <div className="group flex relative">
                  <a href="https://www.linkedin.com/in/roberto-esquivel-troncoso/" className="no-underline text-primary hover:text-primary-100" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                  </a>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">LINKEDIN</span>
                </div>
              </div>
              <div className="mr-2" />
              <div className="flex w-10 h-10 rounded-full bg-[#FFFFFF] justify-center items-center border-2 border-white">
                <div className="group flex relative">
                  <a href="https://github.com/RETBOT/" className="no-underline text-primary hover:text-primary-100" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z"></path>
                    </svg>
                  </a>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">GITHUB</span>
                </div>
              </div>
              <div className="mr-2" />
              <div className="flex w-10 h-10 rounded-full bg-[#FFFFFF] justify-center items-center ">
                <div className="group flex relative">
                  <a href="mailto:robertoesquiveltr16@gmail.com" className="items-center no-underline text-primary hover:text-primary-100" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" className="h-7 w-7" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"></path>
                    </svg>
                  </a>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">EMAIL</span>
                </div>
              </div>
              <div className="mr-2" />
              <div className="flex w-10 h-10 rounded-full bg-[#FFFFFF] justify-center items-center ">
                <div className="group flex relative">
                  <a href="/cv/CV_Roberto_Esquivel_Troncoso.pdf" className="items-center no-underline text-primary hover:text-primary-100" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" className="h-9 w-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.41,5.586c-1.021-1.021-2.363-1.532-3.705-1.532S21.021,4.564,20,5.586L8.153,17.431 c-1.216,1.216-1.216,3.196,0.002,4.414c1.217,1.217,3.195,1.217,4.412,0l8.26-8.26l-1.414-1.414l-8.26,8.26 c-0.437,0.436-1.146,0.437-1.586-0.002c-0.437-0.437-0.437-1.147,0-1.584L21.414,7C22.678,5.738,24.732,5.737,26,7.004 	c1.263,1.263,1.263,3.319,0,4.582L14.151,23.433c-2.091,2.089-5.491,2.089-7.586-0.006c-2.09-2.09-2.09-5.49,0-7.58L16.828,5.586 l-1.414-1.414L5.151,14.433c-2.87,2.87-2.87,7.539,0.006,10.414c2.869,2.87,7.539,2.87,10.408,0L27.414,13 C29.457,10.957,29.457,7.633,27.41,5.586z"></path>
                    </svg>
                  </a>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">CV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-grow flex justify-end items-end lg:mt-[-100px]">
          <img className="max-h-80 sm:max-h-full" src='/assets/RETBOT.png' alt='RETBOT IMG' />
        </div>
      </div>
    </section>
  );
};

export default Hero;


/* {
       // !esTelefono ?
       // (<ComputerGamerCanvas />) :
       // (
       //   <div className="relative flex justify-center items-end h-screen">
       //     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
       //       <img
       //         src={pc_gamer_gif}
       //         alt="pc gamer"
       //         className="w-auto h-auto max-w-xs max-h-xs"
       //       />
       //     </div>
       //   </div>
       // )
     }
     {
     // !esTelefono ? (
     //   <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
     //     <a href='#about'>
     //       <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
     //         <motion.div
     //           animate={{
     //             y: [0, 24, 0],
     //           }}
     //           transition={{
     //             duration: 1.5,
     //             repeat: Infinity,
     //             repeatType: "loop",
     //           }}
     //           className='w-3 h-3 rounded-full bg-secondary mb-1'
     //         />
     //       </div>
     //     </a>
     //   </div>
     // ) : (<></>)
     } */