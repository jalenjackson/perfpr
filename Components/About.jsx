import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'


export default class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div id="about-page">

            </div>

        )
    }
}