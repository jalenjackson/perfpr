import React, {Component} from 'react';

import { NavLink } from 'react-router-dom'



export default class Nav extends Component {
    render(){
        return(
            <div>

                    <section>
                        <nav className="circle">
                            <ul>
                                <img src="/images/logo.png"/>

                                <div className="container red topBotomBordersOut">
                                    <a href="/">Home</a>
                                    <NavLink to="/services">Services</NavLink>
                                    <NavLink to="/blog">Blog</NavLink>
                                    <NavLink to="/getstarted">Get Started</NavLink>
                                </div>
                            </ul>
                        </nav>
                    </section>

                <i className="fa fa-bars"></i>


            </div>
        )
    }
}
