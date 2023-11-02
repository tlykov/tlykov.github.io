import { NavLink } from 'react-router-dom';
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
                <li className="nav-item">
                    <NavLink className="nav-text" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-text" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="social-links">
                <a className="icon" href={linkedinUrl}>
                    <img src={liIcon} height="30px"></img>
                </a>
                <a className="icon" href={githubUrl}>
                    <img src={ghIcon} height="30px"></img>
                </a>
            </div>
        </div>
    );
}

export default Header;