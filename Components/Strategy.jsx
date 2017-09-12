import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'


export default class Strategy extends Component {

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
                        <div className="design-info">
                            <h1>Digital <span style={{color: "rgb(118,182,83)"}}>Strategy</span></h1>
                            <p>Drive revenue to your brand with gaining attention in the experience market.</p>
                        </div>
                    </ReactCSSTransitionGroup>




                    <div className="pin-container">
                        <div className="pin move-pin">

                            <div className="design-img-div design-div-1">
                            </div>
                            <h1>Social Media</h1>
                            <p>Community Interaction</p>
                        </div>
                        <div style={{animationDelay: "0.2s"}} className="pin move-pin">
                            <div className="design-img-div design-div-2">
                            </div>
                            <h1>Product Strategy</h1>
                            <p>Plan your dream product</p>
                        </div>
                        <div style={{animationDelay: "0.4s"}} className="pin move-pin">
                            <div className="design-img-div design-div-3">
                            </div>

                            <h1>Industry Research</h1>
                            <p>Learn what your audience thinks</p>
                        </div>
                        <div style={{animationDelay: "0.6s"}} className="pin move-pin">
                            <div className="design-img-div design-div-4">
                            </div>
                            <h1>Market Testing</h1>
                            <p>Test how the market will react</p>
                        </div>
                    </div>
                </div>

                <div className="design-message">
                    <div className="circle-div"></div>
                    <p className="parallax-scroll ">Your Consultant For The <span style={{color: "rgb(118,182,83)"}}> Digital </span> Industry</p>
                    <button className="button-consultation design-button" >Start Today</button>

                </div>

                <div className="bottom-quick-links">
                    <NavLink to="/design">
                    <div className="quick-link-1 quick">
                        <h1>Design</h1>
                    </div>
                    </NavLink>
                        <div className="quick-link-2 quick">
                            <h1><span style={{color: "rgb(118,182,83)"}}>Strategy</span></h1>
                        </div>

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