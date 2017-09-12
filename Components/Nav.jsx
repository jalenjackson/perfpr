import React, {Component} from 'react';

import { NavLink } from 'react-router-dom'



export default class Nav extends Component {
    render(){
        return(
            <div style={{zIndex: 99999999}}>
                <div className="nav-dropdown">
                    <h2 className="slide-away"><a href = "/">Home</a></h2>
                    <h2 className="mobile-services slide-away">Services</h2>
                    <h2 className="slide-away"><NavLink to="/blog">Blog</NavLink></h2>
                    <h2 className="slide-away"><NavLink to="/getstarted">Get Started</NavLink></h2>


                    <div className="hidden-text">
                    <h2><i className="fa fa-arrow-left"/></h2>
                    <h2><NavLink to="/design">Design</NavLink></h2>
                    <h2><NavLink to="/strategy">Strategy</NavLink></h2>
                    <h2><NavLink to="/development">Development</NavLink></h2>
                    </div>



                    <i className="fa fa-times"/>

                    <div className="design-color"></div>
                </div>


                    <section>
                        <nav style={{zIndex:"99999999999"}} className="circle ">
                            <ul>
                                <a href = "/"><img className="nav-logo" src="/images/logo.png"/></a>

                                <div className="container red topBotomBordersOut responsive-nav">
                                    <a href="/">Home</a>
                                    <a className="services-link">Services</a>
                                    <NavLink to="/blog">Blog</NavLink>
                                    <NavLink  to="/getstarted">Get Started</NavLink>
                                </div>
                            </ul>
                        </nav>


                        <div className="services-tab">

                            <div className="show">
                                <h1>Services</h1>

                                <div className="columns">
                                    <div className="column">
                                        <h2><NavLink to="/design">Design</NavLink></h2>
                                        <ul>
                                            <li>UI/UX Development</li>
                                            <li>Branding</li>
                                            <li>Media Production</li>
                                            <li>Prototyping</li>
                                        </ul>
                                    </div>

                                    <div className="column">
                                        <h2><NavLink to="/strategy">Strategy</NavLink></h2>
                                        <ul>
                                            <li>Social Media</li>
                                            <li>Product Strategy</li>
                                            <li>Industry Research</li>
                                            <li>Market Testing</li>
                                        </ul>
                                    </div>

                                    <div className="column">
                                        <h2><NavLink to="/development">Development</NavLink></h2>
                                        <ul>
                                            <li>Web Design</li>
                                            <li>App Development</li>
                                            <li>AR/VR Technologies</li>
                                            <li>Blockchain - <br/> Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="pic-show">
                                <div className="pic-tab">
                                    <img src="https://lh3.googleusercontent.com/mj8h8Zz3QSSt8tm0x0QstTHcSiMSMuGcvFSqlN8-c05k4O7WCIkB317SJhizIAxE5-O7=w300"/>
                                </div>
                            </div>
                        </div>
                    </section>




                <i className="fa fa-bars"></i>


            </div>
        )
    }
}
