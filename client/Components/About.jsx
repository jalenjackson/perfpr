import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'
import Nav from "./Nav";


export default class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0);

        window.sr = ScrollReveal({ reset: true });

        sr.reveal('.what-we-do', {
            duration: 1200,
            scale: 1,
            delay: 200,
            origin: 'bottom' });

        sr.reveal('.how-it-works', {
            duration: 1200,
            scale: 1,
            delay: 200,
            origin: 'bottom'
        });

        sr.reveal('.panel',200);

        sr.reveal('.how-does-it-work', {
            duration: 1200,
            scale: 1,
            delay: 200,
            origin: 'bottom'
        });

        sr.reveal('.about-btn', {
            duration: 1200,
            scale: 1,
            delay: 200,
            origin: 'bottom'
        });
    }

    render(){
        return(
            <div id="about-page">

                <p className="smaller smaller2"><span>About Us <i className="fa fa-arrow-right"/></span> </p>

                <div className="lower-text">
                    <h1 className="header-message">A creative high end digital</h1>
                    <h1 className=" header-message2"> brand built to  build modern brands</h1>
                </div>
                <div className="video">
                    <div className="video-overlay"></div>
                    <img src="https://webs.columbusstate.edu/images/web_banner.jpg"/>
                </div>

                <div className="what-we-do">


                    <p className="smaller"><span>WHAT WE DO<i className="fa fa-arrow-right"/></span> </p>
                    <h1>What is Perfect Presence?</h1>
                    <p>We are a change in the digital landscape for true entrepreneurs and business owners with brand development at its finest. Get everything a business could need to grow all in one place; Web, Mobile, Branding, Marketing, Media and More. Don't just pay to get something created get yourself a partner to see your concept through from start to finish.</p>
                    <p>The current online attention market is the driving force to many of the successful and rising brands we see today. That means you cannot afford to be left behind by a company full of empty promises when action is the only way to succeed. With our expert team we have what it takes to compete on any stage to drive real success to your brands digital venture.</p>

                    <h2><span>Get Started</span></h2>


                    <div className="how-it-works">
                        <h1>How Does It Work?</h1>
                    </div>

                </div>

                <p className="second-text"><span>Services <i className="fa fa-arrow-right"/></span></p>
                <div className="panel-container">
                    <div className="panel">
                        <div className="panel-text">
                            <img src="https://www.elementarydigital.co.uk/wp-content/uploads/2013/06/ed-icon-strategy.png"/>
                            <h1>Identity Branding</h1>
                        </div>
                    </div>
                    <div  className="panel panel2">
                        <div className="panel-text">
                            <img src="http://tempomarketing.com/wp-content/uploads/2016/03/digital-marketing-icon.png"/>

                            <h1>Digital Marketing</h1>
                        </div>
                    </div>
                    <div  className="panel panel2">
                        <div className="panel-text">
                            <img src="http://freevector.co/wp-content/uploads/2011/10/69012-web-development.png"/>

                            <h1>Web & Mobile Development</h1>
                        </div>
                    </div>

                    <p className="how-does-it-work">
                        Creating the Perfect approach to your online Presence is not always easy. Luckily when its with our amazing team the process is extremely simple to make sure while you are making  a new idea or adding on to an existing brand, you can focus on what you want while we take care of all your digital needs.
                    </p>
                </div>

                <NavLink to="/getstarted"> <button className="about-btn">Get Started</button> </NavLink>

                <Footer/>
            </div>


        )
    }
}