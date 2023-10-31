import { useState } from 'react';
import '../assets/styles/Sidewindow.css';
import Skill from './Skill';

function SideWindow() {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    
    return (
        <button className="trigger" onClick={onClick}>
            <div className={`side-menu ${isActive ? 'active' : 'inactive'}`}>
                <ul id="skill-list">
                    <Skill text={"C++"} level={3} />
                    <Skill text={"C"} level={2} />
                    <Skill text={"Java"} level={2} />
                    <Skill text={"Python"} level={2} />
                    <Skill text={"Javascript"} level={3} />
                    <Skill text={"Typescript"} level={3} />
                    <Skill text={"HTML"} level={3} />
                    <Skill text={"CSS"} level={3} />
                    <Skill text={"Node.js"} level={3} />
                    <Skill text={"Angular"} level={3} />
                    <Skill text={"React"} level={2} />
                    <Skill text={"x86"} level={1} />
                </ul>
            </div>
        
            <div className="side-title">
                <span>Skills</span>
            </div>
        </button>
    );
}

export default SideWindow;