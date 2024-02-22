import { useRef } from 'react';
import { motion, Variants } from "framer-motion";
import '../assets/styles/Projects.css';
import { ProjectList } from '../utils/ProjectList';

export var projectsRef:any;

const projectVariants: Variants = {
    offscreen: {
        x: 80,
        opacity: 0
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.2,
        }
      }
}

function Projects() {
    projectsRef = useRef(null);

    return (
        <motion.div id="projects-div" ref={projectsRef} initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.6}}> 
            <h2>Projects</h2>
            <div id="project-list">
                {ProjectList.map( (project, i) => 
                    <motion.div key={i} className={`project ${project.inProgress ? "inProgress" : ""}`} variants={projectVariants}>
                        <div className='project-top'>
                            <p className="project-title">{project.title}</p>
                            <p className="project-desc">{project.description}</p>
                        </div>
                        <a className="project-link" href={project.link} target="_blank" rel="noopener">Link</a>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Projects;