import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Footer from "./Footer";


export default class Design extends Component {



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


                <Footer/>


                
            </div>

        )
    }
}