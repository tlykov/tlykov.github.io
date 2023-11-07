import { motion, Variants } from "framer-motion";
import pic from '../assets/extra/bg-picture-wide.png?url'
import file from '../assets/files/resume.pdf?url'
import '../assets/styles/Home.css';
import { SideWindow, About } from "../components";

const btnVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: {
                duration: 1, 
                delay: 0.3
            },
            scale: {
                type: 'spring',
                duration: 1.4,
                delay: 0
            }
        }
    },
    hover: {
        scale: 1.05,
        color: '#df883b', 
        borderColor: '#df883b',
        transition: {
            scale: {
                type: 'spring',
                bounce: 0.6,
            }
        }
    },
    tap: {
        scale: 0.95,
        transition : {
            scale: {
                type: 'spring',
                bounce: 0.6,
            }
        }
    }
}

function Home() {
    return (
        <div id="home-div">
            <div className="left-sidebar"></div>
            <div className="main-content">
                <h1 id="subtitle">Software Developer</h1>
                <motion.a className="download-btn" href={file} download="tlykov-cv"
                    variants={btnVariants} initial={'hidden'} animate={'show'} whileHover={'hover'} whileTap={'tap'}>
                    Download CV
                </motion.a>
                <img id="bg-pic" src={pic}></img>
                <div id="fade"></div>
                <About/>
            </div>
            <div className="right-sidebar">
                <SideWindow />
            </div>
            
        </div>
    );
}

export default Home;