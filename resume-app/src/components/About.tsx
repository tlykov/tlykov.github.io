import { useRef } from 'react';
import { motion, Variants } from "framer-motion";
import '../assets/styles/About.css';

export var aboutRef:any;

const ulVariants: Variants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

const liVariants: Variants = {
    offscreen: {
      y: 80,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }
    }
};

function About() {
    aboutRef = useRef(null);

    return (
        <motion.div id="about-div" ref={aboutRef} 
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.6 }}>
            <h2>Education</h2>
            <p id='degree'>Bachelor of Science, Computing Science</p>
            <div id='school'>
                <p>Simon Fraser University</p>
                <p>September 2018 - April 2023</p>
            </div>
            <p id='course-p'>Coursework in:</p>
            <motion.ul id="course-list" variants={ulVariants}>
                <motion.li variants={liVariants}>Software Testing and Security</motion.li>
                <motion.li variants={liVariants}>Modern C++ Development Methods</motion.li>
                <motion.li variants={liVariants}>Web Development</motion.li>
                <motion.li variants={liVariants}>Database Systems</motion.li>
                <motion.li variants={liVariants}>Distributed Systems</motion.li>
                <motion.li variants={liVariants}>Data Communication, Networking</motion.li>
                <motion.li variants={liVariants}>Requirements Engineering</motion.li>
                <motion.li variants={liVariants}>Statistics and Discrete Mathematics</motion.li>
            </motion.ul>
        </motion.div>
    );
};

export default About;