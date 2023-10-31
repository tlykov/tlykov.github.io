import { useState } from 'react';
import '../assets/styles/Sidewindow.css';

function SideWindow() {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    
    return (
        <button className="trigger" onClick={onClick}>
            <div className={`side-menu ${isActive ? 'active' : 'inactive'}`}>
                <ul id="skill-list">
                    <li>C++</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Node.js</li>
                    <li>Angular</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>x86</li>
                </ul>
            </div>
        
            <div className="side-title">
                <span>Skills</span>
            </div>
        </button>
    );
}

export default SideWindow;