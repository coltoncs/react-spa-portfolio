import React from 'react';
import Social from '../components/Social';
import ContactForm from '../components/ContactForm';
import { useSpring, animated, config } from 'react-spring';

function Contact() {
  const prop = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.slow,
  })

  return (
    <animated.div className="condiv" style={prop}>
      <h1 className="subtopic">Contact Me</h1>
      <h3>Email  :   colton.sweeney@gmail.com</h3>
      <h3>GitHub   :   @pizdetz</h3>
      <br />
      <br />
      <ContactForm />
      <Social />
    </animated.div>
  )
}

export default Contact
