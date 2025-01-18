import React from "react";
import Tilt from "react-tilt";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({
  index,
  icon,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white p-5 rounded-full sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
      </Tilt>
    </div>
  );
};


const Tech = ({esTelefono}) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-16'>
      {
        !esTelefono ?
          (
            technologies.map((technology) => (
              <div className='w-40 h-40' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))
          )
          : (
            technologies.map((technology, index) => (
              <TechCard key={`project-${index}`} index={index} {...technology} />
            ))
          )
      }
    </div>
  );
};

export default SectionWrapper(Tech, "");
