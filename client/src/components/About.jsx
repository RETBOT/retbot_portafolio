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
    useState(`Ingeniero en Sistemas Computacionales con sólida experiencia en el desarrollo de aplicaciones empresariales, web y móviles. He trabajado extensivamente con tecnologías como GeneXus, .NET (C# y .NET Core), Xamarin, Flutter, MERN Stack (React.js, Express.js, Node.js, MongoDB), jQuery con DevExpress, Visual Basic 6 y SQL Server. Apasionado por la programación y la resolución de problemas complejos, disfruto enfrentando nuevos retos y aprendiendo tecnologías emergentes. En mi puesto actual, desarrollo y personalizo soluciones ERP con GeneXus, además de crear APIs y aplicaciones web robustas utilizando .NET, enfocándome en rendimiento, escalabilidad y excelencia técnica. Comprometido con la mejora continua, la colaboración en equipo y la entrega de soluciones innovadoras, mi enfoque es aportar valor estratégico mediante el desarrollo de software de alto impacto.`)
  useEffect(() => {
    setTitulo(language !== 'en' ? 'Introduction' : 'Introducción');
    setSubTitulo(language !== 'en' ? 'Overview' : 'Descripción general');
    setDescripcion(language !== 'en' 
    ? `Computer Systems Engineer with extensive experience in developing enterprise, web, and mobile applications. I have worked extensively with technologies such as GeneXus, .NET (C# and .NET Core), Xamarin, Flutter, MERN Stack (React.js, Express.js, Node.js, MongoDB), jQuery with DevExpress, Visual Basic 6, and SQL Server. Passionate about programming and solving complex problems, I enjoy tackling new challenges and learning emerging technologies. In my current role, I develop and customize ERP solutions with GeneXus, as well as create robust APIs and web applications using .NET, focusing on performance, scalability, and technical excellence. Committed to continuous improvement, teamwork, and delivering innovative solutions, my goal is to add strategic value through the development of high-impact software.` 
    : `Ingeniero en Sistemas Computacionales con sólida experiencia en el desarrollo de aplicaciones empresariales, web y móviles. He trabajado extensivamente con tecnologías como GeneXus, .NET (C# y .NET Core), Xamarin, Flutter, MERN Stack (React.js, Express.js, Node.js, MongoDB), jQuery con DevExpress, Visual Basic 6 y SQL Server. Apasionado por la programación y la resolución de problemas complejos, disfruto enfrentando nuevos retos y aprendiendo tecnologías emergentes. En mi puesto actual, desarrollo y personalizo soluciones ERP con GeneXus, además de crear APIs y aplicaciones web robustas utilizando .NET, enfocándome en rendimiento, escalabilidad y excelencia técnica. Comprometido con la mejora continua, la colaboración en equipo y la entrega de soluciones innovadoras, mi enfoque es aportar valor estratégico mediante el desarrollo de software de alto impacto.`
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
