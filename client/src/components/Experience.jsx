import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiencesEn, experiencesEs } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#273433",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "8px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[26px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[20px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-4 space-y-4'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[16px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ language }) => {
  const [experiences, setExperiences] = useState(experiencesEs);
  const [titulo, setTitulo] = useState('Lo que he hecho hasta ahora');
  const [subTitulo, setSubTitulo] = useState('');

  useEffect(() => {
    setExperiences(language !== 'en' ? experiencesEn : experiencesEs);
    setTitulo(language !== 'en' ? 'What I have done so far' : 'Lo que he hecho hasta ahora');
    setSubTitulo(language !== 'en' ? 'Work Experience.' : 'Experiencia laboral.');
  }, [language]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {titulo}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {subTitulo}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
