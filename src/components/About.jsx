import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';



import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
 

import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Import or define the fadeIn function
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }} // Use 'options' instead of 'option'
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h2 className="text-center text-white font-bold text-[20px]">{title}</h2>
        </div>
      </motion.div>
    </Tilt>
  );
};



const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>


        <motion.p variants={fadeIn("", "", 0.2, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I'm a skilled software developer with expreience in Javascript, and expertise in freamworks like React, Node.js and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solution that solve real-world problems. Let's work together to bring your ideas to life.
        </motion.p>


        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about");