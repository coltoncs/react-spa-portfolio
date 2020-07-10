import React from 'react';
import { useSpring, animated, config } from 'react-spring';


function About() {

    const prop = useSpring({
        opacity: 1,
        from: {
            opacity: 0,
        },
        config: config.slow,
    })

    return (
        <animated.div className="condiv" style={prop}>
            <h1 className="subtopic">About Me</h1>
            <h4>Hello!</h4>
            <h1>My name is Colton Sweeney</h1>
            <h3>Fullstack Web Developer | UI/UX Designer</h3>
            <br></br>
            <p>
                I am currently enrolled at Wake Technical Community College studying web development and design, however my interest in these
                subjects stem from constant attraction to computers ever since I've been a child. I started writing scripts and small one-off
                programs when I was 14 in high school, since then I've built small apps for various purposes. At my first job outside of high
                school, I was given the opportunity to build in-house apps with our proprietary JavaScript frameworks and even some .NET frameworks,
                which boosted me into the world of web development. I hope to graduate soon and find employmnent in the front-end/back-end web development
                world.
            </p>

        </animated.div>
    )
}

export default About
