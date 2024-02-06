import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] border-[1.5px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] border-[1.5px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
    useState(`Soy un ingeniero en sistemas computacionales con amplia experiencia en desarrollo web y móvil. Me especializo en tecnologías como C#, .NET Core, MERN (React.js, Express.js, Node.js, MongoDB), Flutter, jQuery con DevExpress, Visual Basic 6 y SQL Server. He trabajado en una variedad de proyectos desafiantes de desarrollo de software y estoy entusiasmado por aplicar mis habilidades para crear soluciones innovadoras. ¡Estoy listo para trabajar contigo en tu próximo proyecto!`);


  useEffect(() => {
    setTitulo(language !== 'en' ? 'Introduction' : 'Introducción');
    setSubTitulo(language !== 'en' ? 'Overview' : 'Descripción general');
    setDescripcion(language !== 'en' 
    ? `I am a computer systems engineer with extensive experience in web and mobile development. I specialize in technologies such as C#, .NET Core, MERN (React.js, Express.js, Node.js, MongoDB), Flutter, jQuery with DevExpress, Visual Basic 6, and SQL Server. I have worked on a variety of challenging software development projects and am excited to apply my skills to create innovative solutions. I am ready to work with you on your next project!` 
    : `Soy un ingeniero en sistemas computacionales con amplia experiencia en desarrollo web y móvil. Me especializo en tecnologías como C#, .NET Core, MERN (React.js, Express.js, Node.js, MongoDB), Flutter, jQuery con DevExpress, Visual Basic 6 y SQL Server. He trabajado en una variedad de proyectos desafiantes de desarrollo de software y estoy entusiasmado por aplicar mis habilidades para crear soluciones innovadoras. ¡Estoy listo para trabajar contigo en tu próximo proyecto!`
    )
  }, [language]);



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{titulo}</p>
        <h2 className={styles.sectionHeadText}>{subTitulo}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        {descripcion}

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-20 justify-center items-center '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
