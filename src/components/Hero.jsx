import { motion } from "framer-motion";
import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className=" relative mx-auto w-full h-screen">
        <div className={`${styles.paddingX} absolute inset-0 sm:top-[120px] top-[50px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>
          <div className="">
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Shaxzod</span></h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              I Developer, user <br className="sm:block hidden"/>interface and web application 
            </p>
          </div>
        </div>
        <ComputersCanvas />


        <div className=" absolute xs:bottom-3 bottom-16 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[26px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-center p-2">
              <motion.dev animate={{ y: [0, 10, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} 
              className="w-3 h-3 rounded-full bg-secondary mb-2"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero