import React, { Component } from 'react'
import SkillCard from '../components/SkillCard'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'NETLIFY', 'POSTMAN', 'VS CODE', 'PYTHON', 'DJANGO', 'SQL', 'MONGODB', '.NET', 'AWS', 'PHOTOSHOP', 'ILLUSTRATOR', 'DREAMWEAVER']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <div className="skill-group">
                    {this.state.skills.map((value) => {
                        return <SkillCard skill={value} />
                    })}
                </div>
            </div>
        )
    }
}

export default Skills
