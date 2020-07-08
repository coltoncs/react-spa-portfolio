import React from 'react'

function handleClick(e){
    e.preventDefault()
    alert("Thank you!")
}

function ContactForm(){
    return(
        <form className="contact-form">
            <label for="fname">First Name:</label>
            <input type="text" name="fname"></input>
            <label for="lname">Last Name:</label>
            <input type="text" name="lname"></input>
            <label for="email">Email:</label>
            <input type="text" name="email"></input>
            <label for="message">Brief message:</label>
            <input type="text" name="message"></input>
            <input type="submit" value="Submit" id="submit" onClick={handleClick}></input>
        </form>
    )
}

export default ContactForm