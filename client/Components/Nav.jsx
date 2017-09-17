import React, {Component} from 'react';

import { NavLink } from 'react-router-dom'



export default class Nav extends Component {
    render(){
        return(
            <div style={{zIndex: 99999999}}>
                <div className="nav-dropdown">
                    <h2 className="slide-away"><a href = "/"> <img src="images/house.png"/> Home   </a> </h2>
                    <h2 className="slide-away"><NavLink to="/about"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/2000px-Circle-icons-computer.svg.png"/>About</NavLink></h2>

                    <h2 className="mobile-services slide-away"> <img src="https://www.shareicon.net/data/512x512/2015/10/07/113661_tools_512x512.png"/>  Services</h2>
                    <h2 className="slide-away"><NavLink to="/blog"> <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/08_comment-512.png"/>  Blog</NavLink></h2>
                    <h2 className="slide-away"><NavLink to="/getstarted"> <img src="https://lh5.ggpht.com/8h4a-QzLFHu3pxFZ-Np8AyyUCq1G97T1_7F3ScjbBaxb6wGSdoCLHanFtnQa9kbg0d4=w300"/>  Get Started</NavLink></h2>


                    <div className="hidden-text">
                    <h2><i className="fa fa-arrow-left"/></h2>
                    <h2><NavLink to="/design"><img src="https://orig12.deviantart.net/2949/f/2015/274/3/1/code_flat_icon_by_foxinflame-d9bkady.png"/> Design</NavLink></h2>
                    <h2><NavLink to="/strategy"><img src="https://image.flaticon.com/icons/png/512/262/262832.png"/> Strategy</NavLink></h2>
                    <h2><NavLink to="/development"><img src="https://cdn2.iconfinder.com/data/icons/classic-development-circle/512/system-512.png"/> Development</NavLink></h2>
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
                                    <NavLink to="/about">About</NavLink>
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
