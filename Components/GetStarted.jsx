import React, {Component} from 'react'
import Footer from './Footer';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class GetStarted extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }


    render(){
        return(
            <div id="get-started">

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                <div className="get-started-text">
                    <h2  className="get-started slide-left">Get <span style={{color: "rgb(118,182,83)"}}> Started </span></h2>
                    <hr/>
                    <h1 className="parallax-scroll">Make Your Idea <br/> Come To Life.</h1>
                <h2 className="parallax-scroll">Questions? <span style={{color: "green"}}>We Love To Help</span></h2>
                    <h2 className="parallax-scroll">Info@perfpr.com | +1-301-798-6192</h2>
                </div>
                </ReactCSSTransitionGroup>
                    <div className="outer-form">

                    <div className="container2">
                        <form id="contact" action="" method="post">
                            <h3>How Can We Help You Grow Your Brand?</h3>
                            <h4>You're just a few steps away from getting the most out of your online presence! Just fill out the form below and one of our amazing Digital Solution Specialists will be in touch shortly to get started!</h4>
                            <fieldset>
                                <input placeholder="Your name" type="text" tabIndex="1" required autoFocus/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" tabIndex="2" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" type="tel" tabIndex="3" required/>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <select className="form-control" id="sel1">
                                        <option>Digital Solution Services</option>
                                        <option>App Development</option>
                                        <option>Audio Engineering</option>
                                        <option>Branding</option>
                                        <option>Content Creation</option>
                                        <option>Digital Infrastructure</option>
                                        <option>In-Depth Research</option>
                                        <option>Market Testing</option>
                                        <option>Media Production</option>
                                        <option>Product Design</option>
                                        <option>Product Strategy</option>
                                        <option>Social Media Strategy</option>
                                        <option>Web Design</option>
                                        <option>Video Production</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </form>
                    </div>
                    </div>

                <Footer/>
            </div>
        )
    }
}