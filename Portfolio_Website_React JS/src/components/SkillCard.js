import React, { Component } from 'react'

class SkillCard extends Component{
    constructor(props){
        super(props);   
        this.handleClick = this.handleClick.bind(this);
        this.getCode = this.getCode.bind(this);
    }

    getCode(){
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    handleClick(e){
        e.preventDefault();
        const el = e.target;
        el.style.color = this.getCode();
    }
    
    render(){
        return(
            <div className="skill">
                <h1><a href="" onClick={this.handleClick}>{this.props.skill}</a></h1>
            </div>
        )
    }
}

export default SkillCard