import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'


export default class Development extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }


    render(){
        return(
            <div id="design-page">






                <div style={{height: "750px"}} className="design-header development-header">



                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="change"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={2000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >
                        <div className="design-info development-info">
                            <h1>Development</h1>
                            <p style={{width:"750px"}}><b>Today’s Businesses deserve tomorrow’s technology.</b><br/>Don’t wait for someone else to make the next big platform. Every day people are working in all kinds of industries to innovate and create new ways of reaching customers, building audiences, beginning new ventures and expanding their businesses into new spheres altogether. Today, being successful means being on the cutting edge of what technology has to offer. Give your brand what it needs to thrive in a competitive online economy with state of the art technologies that will make sure your brand is ready for the future.</p>
                        </div>
                    </ReactCSSTransitionGroup>




                    <div style={{marginTop:"160px"}} className="pin-container development-pin-container">
                        <div className="pin move-pin">

                            <div className="design-img-div design-div-1">
                            </div>
                            <h1>Web Design</h1>
                            <p>Responsive Unique Designs</p>
                        </div>
                        <div style={{animationDelay: "0.2s"}} className="pin move-pin">
                            <div className="design-img-div design-div-2">
                            </div>
                            <h1>App Development</h1>
                            <p>Cross Platform Apps Full Of Features</p>
                        </div>
                        <div style={{animationDelay: "0.4s"}} className="pin move-pin">
                            <div className="design-img-div design-div-3">
                            </div>

                            <h1>Ar/Vr Technologies</h1>
                            <p>A new way to see business</p>
                        </div>
                        <div style={{animationDelay: "0.6s"}} className="pin move-pin">
                            <div className="design-img-div design-div-4">
                            </div>
                            <h1>Blockchain Development</h1>
                            <p>New Development Powerhouse</p>
                        </div>
                    </div>
                </div>

                <div className="design-message">
                    <div className="circle-div"></div>
                    <p className="parallax-scroll ">Make Your <span style={{color: "rgb(118,182,83)"}}> Ideas </span> Come To Life</p>
                    <button className="button-consultation design-button" >Start Today</button>

                </div>

                <div className="bottom-quick-links">
                    <NavLink to="/design">
                    <div className="quick-link-1 quick">
                        <h1>Design</h1>
                    </div>
                    </NavLink>
                    <NavLink to="/strategy">
                        <div className="quick-link-2 quick">
                            <h1>Strategy</h1>
                        </div>
                    </NavLink>
                        <div className="quick-link-3 quick">
                            <h1><span style={{color: "rgb(118,182,83)"}}>Development</span></h1>
                        </div>
                </div>

                <Footer/>



            </div>

        )
    }
}