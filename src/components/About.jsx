import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { ReactLogoCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ language }) => {
  const [titulo, setTitulo] = useState('Introducción');
  const [subTitulo, setSubTitulo] = useState('Descripción general')
  const [descripcion, setDescripcion] =
    useState(`Soy un desarrollador de software con experiencia en C#, MVC y .NET Core.
  Me especializo en el desarrollo de aplicaciones web y la creación de scrapers.
  Utilizo herramientas como HtmlAgilityPack, JavaScript y CSS para extraer y automatizar
  la recopilación de datos en línea.
  También tengo conocimientos en la pila MERN, incluyendo React.js, Express.js, Node.js y MongoDB.
  Estoy emocionado por aplicar mis habilidades en desafiantes proyectos de desarrollo de software.
  ¡Trabajemos juntos para hacer realidad tus ideas!`);


  useEffect(() => {
    setTitulo(language !== 'en' ? 'Introduction' : 'Introducción');
    setSubTitulo(language !== 'en' ? 'Overview' : 'Descripción general');
    setDescripcion(language !== 'en' ? `I'm a software developer with expertise in C#, MVC, and .NET Core. My specialization lies in web application development and creating scrapers. I leverage tools like HtmlAgilityPack, JavaScript, and CSS to extract and automate data collection from online sources. I have also expanded my skills to the MERN stack, including React.js, Express.js, Node.js, and MongoDB. I'm excited to apply my abilities to challenging software development projects. Let's work together to bring your ideas to life!` : `Soy un desarrollador de software con experiencia en C#, MVC y .NET Core.Me especializo en el desarrollo de aplicaciones web y la creación de scrapers. Utilizo herramientas como HtmlAgilityPack, JavaScript y CSS para extraer y automatizarla recopilación de datos en línea.También tengo conocimientos en la pila MERN, incluyendo React.js, Express.js, Node.js y MongoDB.Estoy emocionado por aplicar mis habilidades en desafiantes proyectos de desarrollo de software.¡Trabajemos juntos para hacer realidad tus ideas!`)
  }, [language]);



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{titulo}</p>
        <h2 className={styles.sectionHeadText}>{subTitulo}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {descripcion}

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
