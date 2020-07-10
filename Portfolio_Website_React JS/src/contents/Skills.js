import React from 'react';
import SkillCard from '../components/SkillCard';
import { useSpring, animated, config } from 'react-spring';

function Skills() {
    const skills = ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'NETLIFY', 'POSTMAN', 'VS CODE', 'PYTHON', 'DJANGO', 'SQL', 'MONGODB', '.NET', 'AWS', 'PHOTOSHOP', 'ILLUSTRATOR', 'DREAMWEAVER'];
    const prop = useSpring({
        opacity: 1,
        from: {
            opacity: 0,
        },
        config: config.slow,
    })

    return (
        <animated.div className="condiv skills" style={prop}>
            <h1 className="subtopic">My Skills</h1>
            <div className="skill-group">
                {skills.map((value) => {
                    return <SkillCard skill={value} />
                })}
            </div>
        </animated.div>
    )
}

export default Skills
