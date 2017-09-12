import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'


export default class Design extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }


    render(){
        return(
            <div id="design-page">






                <div className="design-header">



                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="change"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={2000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >
                    <div className="design-info ">
                        <h1>Visual <span style={{color: "rgb(118,182,83)"}}>Design</span></h1>
                        <p>Tie It All Together And Put a Nice Bow On It!</p>
                    </div>
                    </ReactCSSTransitionGroup>




                    <div className="pin-container">
                        <div className="pin move-pin">

                            <div className="design-img-div design-div-1">
                            </div>
                            <h1>UI/UX Design</h1>
                            <p>Built for Users</p>
                        </div>
                        <div style={{animationDelay: "0.2s"}} className="pin move-pin">
                            <div className="design-img-div design-div-2">
                            </div>
                            <h1>Branding</h1>
                            <p>A new look & feel</p>
                        </div>
                        <div style={{animationDelay: "0.4s"}} className="pin move-pin">
                            <div className="design-img-div design-div-3">
                            </div>

                            <h1>Media</h1>
                            <p>Create your media</p>
                        </div>
                        <div style={{animationDelay: "0.6s"}} className="pin move-pin">
                            <div className="design-img-div design-div-4">
                            </div>
                            <h1>Prototyping</h1>
                            <p>Test your idea visually</p>
                        </div>
                    </div>
                </div>

                <div className="design-message">
                    <div className="circle-div"></div>
                    <p className="parallax-scroll ">Let your <span style={{color: "rgb(118,182,83)"}}> creativity </span> prosper</p>
                    <button className="button-consultation design-button" >Start Today</button>

                </div>

                <div className="bottom-quick-links">
                    <div className="quick-link-1 quick">
                        <h1><span style={{color: "rgb(118,182,83)"}}>Design</span></h1>
                    </div>
                    <NavLink to="/strategy">
                    <div className="quick-link-2 quick">
                        <h1>Strategy</h1>
                    </div>
                    </NavLink>
                    <NavLink to="/development">
                    <div className="quick-link-3 quick">
                        <h1>Development</h1>
                    </div>
                    </NavLink>
                </div>

                <Footer/>


                
            </div>

        )
    }
}