import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputerGamerCanvas } from "./canvas";

const Hero = ({ language }) => {
  const [saludo, setSaludo] = useState('Hola, soy');
  const [dev, setDev] = useState('Desarrollador de software');
  const [exp, setExp] = useState('con experiencia en C# en .NET Core y Fullstack con MERN.');

  useEffect(() => {
    setSaludo(language !== 'en' ? `Hi, I'm` : 'Hola, soy');
    setDev(language !== 'en' ? "Software developer" : 'Desarrollador de software');
    setExp(language !== 'en' ? `experienced in C# in .NET Core <br />and Fullstack with MERN.` : `con experiencia en C# en .NET Core <br />y Fullstack con MERN.`);
  }, [language])

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-screen-2xl	mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {saludo} <span className='text-[#915EFF]'>Roberto <br className='sm:block hidden' />Esquivel Troncoso</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {dev} <br className='sm:block hidden' />
            <span dangerouslySetInnerHTML={{ __html: exp }}></span>
          </p>
        </div>
      </div>

      <ComputerGamerCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
