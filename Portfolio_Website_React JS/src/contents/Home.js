import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/DSC02982.png';
import Social from '../components/Social';
import { useSpring, animated, config } from 'react-spring';




function Home() {
  const prop = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.slow,
  })

  return (
    <animated.div className="condiv home" style={prop}>
      <img src={profilepic} className="profilepic" alt="Self portrait of myself"></img>
      <ReactTypingEffect className="typingeffect" text={['Hello there!', 'My name is Colton Sweeney', 'I enjoy cars, cats, and computers']} speed={100} eraseDelay={500} />
      <Social />
    </animated.div>
  )

}

export default Home
