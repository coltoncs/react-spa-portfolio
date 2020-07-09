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
                <button onClick={this.handleClick}>{this.props.skill}</button>
            </div>
        )
    }
}

export default SkillCard