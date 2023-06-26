import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = (esTelefono) => {
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
            technologies.map((technology) => (
              <div className='w-40 h-40' key={technology.name}>
                <img class="rounded-full w-full h-full bg-white" src={technology.icon} />
              </div>
            ))
          )
      }


    </div>
  );
};

export default SectionWrapper(Tech, "");
