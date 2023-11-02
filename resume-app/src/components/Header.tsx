import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import liIcon from '../assets/icons/linkedin-icon.png?url';
import ghIcon from '../assets/icons/github-icon.png?url';
import '../assets/styles/Header.css';

function Header() {
    const linkedinUrl = "https://www.linkedin.com/in/tim-lykov/";
    const githubUrl = "https://github.com/tlykov";

    return (
        <div className="header">
            <h1 className="main-heading" id="name-heading">Timofey Lykov</h1>
            <ul className="nav-links">
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <NavLink className="nav-text" to="/">Home</NavLink>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <NavLink className="nav-text" to="/contact">Contact</NavLink>
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