import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import liIcon from '../assets/icons/linkedin-icon.png?url';
import ghIcon from '../assets/icons/github-icon.png?url';
import '../assets/styles/Header.css';
import { aboutRef } from './About';
import { projectsRef } from './Projects';


function Header() {
    const linkedinUrl = "https://www.linkedin.com/in/tim-lykov/";
    const githubUrl = "https://github.com/tlykov";

    const [inView, setInView] = useState("home");
    const navigate = useNavigate();
    
    const baseColor = "rgb(0,0,0)";
    const accentColor = "rgb(223, 136, 59)";

    const scrollToAbout = () => {
        if(aboutRef.current == null) {
            navigate('/');
            setTimeout( () => { 
                window.scrollTo({
                    top: aboutRef.current.offsetTop - 140,
                    behavior: 'smooth',
                }) 
            }, 10);
        } else {
            window.scrollTo({
                top: aboutRef.current.offsetTop - 140,
                behavior: 'smooth',
            });
        }
    };

    const scrollToProjects = () => {
        if(projectsRef.current == null) {
            navigate('/');
            setTimeout( () => { 
                window.scrollTo({
                    top: projectsRef.current.offsetTop - 120,
                    behavior: 'smooth',
                }) 
            }, 10);
        } else {
            window.scrollTo({
                top: projectsRef.current.offsetTop - 120,
                behavior: 'smooth',
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    const listenScrollEvent = () => {
        if(aboutRef.current != null && inView != "contact") {
            if (window.scrollY > projectsRef.current.offsetTop - 400) {
                setInView("projects");
            } else if (window.scrollY > aboutRef.current.offsetTop - 340) {
                setInView("about");
            } else {
                setInView("home");
            }
        }
    }
    
    window.addEventListener('scroll', listenScrollEvent,false);

    const homeClick = () => {
        setInView("home");
        scrollToTop();
    }

    const contactClick = () => {
        setInView("contact");
    }

    return (
        <div className="header">
            <h1 className="main-heading" id="name-heading">Timofey Lykov</h1>
            <ul className="nav-links">
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={homeClick}>
                    <NavLink className="nav-text" to="/" style={{color: `${inView=="home" ? accentColor : baseColor}`}}>Home</NavLink>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollToAbout}>
                    <span className="nav-text" style={{color: `${inView=="about" ? accentColor : baseColor}`}}>About</span>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollToProjects}>
                    <span className="nav-text" style={{color: `${inView=="projects" ? accentColor : baseColor}`}}>Projects</span>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={contactClick}>
                    <NavLink className="nav-text" to="/contact" style={{color: `${inView=="contact" ? accentColor : baseColor}`}}>Contact</NavLink>
                </motion.li>
            </ul>
            <div className="social-links">
                <motion.a className="icon" href={linkedinUrl} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <img src={liIcon} height="30px"></img>
                </motion.a>
                <motion.a className="icon" href={githubUrl} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <img src={ghIcon} height="30px"></img>
                </motion.a>
            </div>
        </div>
    );
}

export default Header;