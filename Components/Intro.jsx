import React, {Component} from 'react'

export default class Intro extends Component {
    render(){
        return(
            <div style={{zIndex: 900}} className="intro">
                <img src="/images/logo.png"/>
                <div className="design-line"></div>
            </div>
        )
    }
}