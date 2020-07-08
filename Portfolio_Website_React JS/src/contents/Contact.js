import React, { Component } from 'react';
import Social from '../components/Social';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  :   colton.sweeney@gmail.com</h3>
            <h3>GitHub   :   @pizdetz</h3>
            <br/>
            <br/>
            <ContactForm />
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    