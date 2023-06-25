import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectsEn, projectsEs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ language }) => {
  const [titulo, setTitulo] = useState('Mi trabajo');
  const [subTitulo, setSubtitulo] = useState('Proyectos');

  const [descripcion, setDescripcion] = useState(`A continuación, se presentan algunos proyectos que muestran mis habilidades y experiencia a través de ejemplos concretos de mi trabajo. Cada proyecto se describe brevemente y se incluyen enlaces a repositorios de código y demostraciones en vivo. Estos proyectos reflejan mi capacidad para resolver problemas complejos, trabajar con diversas tecnologías y gestionar proyectos de manera efectiva.`);

  const [projects, setProjects] = useState(projectsEs);

  useEffect(() => {

    setTitulo(language !== 'en' ? 'My work' : 'Mi trabajo');
    setSubtitulo(language !== 'en' ? 'Projects.' : 'Proyectos.');

    setDescripcion(language !== 'en' ? 'The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'
      : 'A continuación, se presentan algunos proyectos que muestran mis habilidades y experiencia a través de ejemplos concretos de mi trabajo. Cada proyecto se describe brevemente y se incluyen enlaces a repositorios de código y demostraciones en vivo. Estos proyectos reflejan mi capacidad para resolver problemas complejos, trabajar con diversas tecnologías y gestionar proyectos de manera efectiva.');

    setProjects(language !== 'en' ? projectsEn : projectsEs);

  }, [language])


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{titulo}</p>
        <h2 className={`${styles.sectionHeadText}`}>{subTitulo}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[22px] max-w-5xl leading-[33px]'
        >
          {descripcion}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-16 justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
