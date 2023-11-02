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
                    <Skill key={0} text={"C++"} level={3} />
                    <Skill key={1} text={"C"} level={2} />
                    <Skill key={2} text={"Java"} level={2} />
                    <Skill key={3} text={"Python"} level={2} />
                    <Skill key={4} text={"Javascript"} level={3} />
                    <Skill key={5} text={"Typescript"} level={3} />
                    <Skill key={6} text={"HTML"}level={3} />
                    <Skill key={7} text={"CSS"} level={3} />
                    <Skill key={8} text={"Node.js"} level={3} />
                    <Skill key={9} text={"Angular"} level={3} />
                    <Skill key={10} text={"React"} level={2} />
                    <Skill key={11} text={"x86"} level={1} />
                </ul>
            </div>
        
            <div className="side-title">
                <span>Skills</span>
            </div>
        </button>
    );
}

export default SideWindow;