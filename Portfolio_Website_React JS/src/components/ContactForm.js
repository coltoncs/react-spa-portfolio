import React, { Component } from 'react';


class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            message: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleFNameChange(e){
        this.setState({fname: e.target.value});
    }

    handleLNameChange(e){
        this.setState({lname: e.target.value});
    }

    handleEmailChange(e){
        this.setState({email: e.target.value});
    }

    handleMessageChange(e){
        this.setState({message: e.target.value});
    }

    handleClick(e){
        e.preventDefault()        
        alert("Thank you, " + this.state.fname + " " + this.state.lname + "! Email: " + this.state.email + " Message: " + this.state.message);
    }
    
    render(){
        return(
            <form className="contact-form">
                <label for="fname">First Name:</label>
                <input type="text" name="fname" onChange={this.handleFNameChange}></input>
                <label for="lname">Last Name:</label>
                <input type="text" name="lname" onChange={this.handleLNameChange}></input>
                <label for="email">Email:</label>
                <input type="text" name="email" onChange={this.handleEmailChange}></input>
                <label for="message">Brief message:</label>
                <input type="text" name="message" onChange={this.handleMessageChange}></input>
                <input type="submit" value="Submit" id="submit" onClick={this.handleClick}></input>
            </form>
        )
    }  
}

export default ContactForm;