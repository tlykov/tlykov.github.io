import { useRef } from 'react';
//import { motion, Variants } from "framer-motion";
import '../assets/styles/Projects.css';
import { ProjectList } from '../utils/ProjectList';

export var projectsRef:any;

function Projects() {
    projectsRef = useRef(null);

    return (
        <div id="projects-div" ref={projectsRef}>
            <h2>Projects</h2>
            <div id="project-list">
                {ProjectList.map( (project, i) => 
                    <div key={i} className={`project ${project.inProgress ? "inProgress" : ""}`}>
                        <div className='project-top'>
                            <p className="project-title">{project.title}</p>
                            <p className="project-desc">{project.description}</p>
                        </div>
                        <a className="project-link" href={project.link}>Link</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;