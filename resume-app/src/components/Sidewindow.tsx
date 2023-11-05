import { useState } from 'react';
import '../assets/styles/Sidewindow.css';
import Skill from './Skill';
import { SkillList as skills } from '../utils/SkillList';

function SideWindow() {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    
    return (
        <button className="trigger" onClick={onClick}>
            <div className={`side-menu ${isActive ? 'active' : 'inactive'}`}>
                <ul id="skill-list">
                    {skills.map((el, i) =>
                        <Skill key={i} text={el.name} level={el.level}/>
                    )}
                </ul>
            </div>
        
            <div className="side-title">
                <span>Skills</span>
            </div>
        </button>
    );
}

export default SideWindow;