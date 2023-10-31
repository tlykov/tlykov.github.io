import '../assets/styles/Skill.css'

function Skill(props: any) {
    const text = props.text;
    const level = props.level;
    const indicators = [];
    for(let i=0; i<level; i++) {
        indicators.push(<div className='indicator'></div>);
    }

    return (
        <div className='skill-li'>
            <div className='lvl-div'>{indicators}</div>
            <span className='skill-text'>{text}</span>
        </div>
    )
}

export default Skill;