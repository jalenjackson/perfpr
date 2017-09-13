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

                <p className="smaller smaller2"><span>About Us <i className="fa fa-arrow-right"/></span> </p>

                <h1 className="header-message">A creative high end digital <br/> brand built to  build modern brands</h1>

                <div className="video">
                    <div className="video-overlay"></div>
                    <video autoPlay={true} muted={true} loop={true}>
                        <source src="images/snowy.mp4" type="video/mp4"/>
                    </video>
                    <div className="play-button">

                        <p>PLAY</p>
                    </div>
                </div>

                <div className="what-we-do">


                    <p className="smaller"><span>WHAT WE DO<i className="fa fa-arrow-right"/></span> </p>
                    <h1>What is Perfect Presence?</h1>
                    <p>We are a change in the digital landscape for true entrepreneurs and business owners with brand development at its finest. Get everything a business could need to grow all in one place; Web, Mobile, Branding, Marketing, Media and More. Don't just pay to get something created get yourself a partner to see your concept through from start to finish.</p>
                    <p>The current online attention market is the driving force to many of the successful and rising brands we see today. That means you cannot afford to be left behind by a company full of empty promises when action is the only way to succeed. With our expert team we have what it takes to compete on any stage to drive real success to your brands digital venture.</p>

                    <h2><span>Get Started</span></h2>


                    <div className="how-it-works">
                        <h1>How Does It Work?</h1>
                        <div className="panel"></div>
                    </div>

                </div>
            </div>


        )
    }
}