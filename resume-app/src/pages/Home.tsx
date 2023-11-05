import { motion } from "framer-motion";
import pic from '../assets/extra/bg-picture-wide.png?url'
import file from '../assets/files/resume.pdf?url'
import '../assets/styles/Home.css';
import { SideWindow } from "../components";

function Home() {
    return (
        <div id="home-div">
            <div className="left-sidebar"></div>
            <div className="main-content">
                <h1 id="subtitle">Software Developer</h1>
                <motion.a className="download-btn" href={file} download="tlykov-cv"
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{opacity: {duration: 1, delay: 0.5}, scale: {type: 'spring', bounce: 0.6}}}
                    whileHover={{scale: 1.05, color: '#df883b', borderColor: '#df883b'}} whileTap={{scale: 0.95}}>
                    Download CV
                </motion.a>
                <img id="bg-pic" src={pic}></img>
            </div>
            <div className="right-sidebar">
                <SideWindow />
            </div>
            
        </div>
    );
}

export default Home;