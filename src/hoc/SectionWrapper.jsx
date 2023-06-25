import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC({ language }) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} place-content-evenly max-w-screen-2xl mx-auto relative z-0 `}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component language={language} />
      </motion.section>
    );
  };

export default StarWrapper;
