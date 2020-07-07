import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <h4 class="secondtext">{this.props.where}</h4>
            <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
            <p>{this.props.desc}</p>
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    