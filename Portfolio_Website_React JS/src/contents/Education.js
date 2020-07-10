import React from 'react';
import Widecard from '../components/Widecard';
import { useSpring, animated, config } from 'react-spring';


function Education() {
    const internDescription = "Working with multiple teams across the Core A product line, which includes Sitefinity, DataDirect, OpenEdge, etc. Create infographics, product how-to's, customer surveys, aggregate product assets, and more."
    const collegeDescription = "Enrolled in Wake Tech's Associate Web Developer course, taking classes such as database programming, front-end web design, internet tech security, and more. Hoping to graduate by 2021."
    const schoolDescription = "Earned high school diploma at Apex High School with focus on Math and Science coreses. Was the first student in the high school to pass Adobe's Photoshop Communications certificate. Earned certificates for Microsoft Office products as well."

    const prop = useSpring({
        opacity: 1,
        from: {
            opacity: 0,
        },
        config: config.slow,
    })

    return (
        <animated.div className="condiv" style={prop}>
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Core A PMK Intern" where="Progress Software" from="June 2016" to="Present" desc={internDescription} />
            <hr />
            <Widecard title="AAS Web Development" where="Wake Tech Community College" from="2019" to="Present" desc={collegeDescription} />
            <hr />
            <Widecard title="High School Education" where="Apex High School" from="2012" to="2016" desc={schoolDescription} />
        </animated.div>
    )
}

export default Education
