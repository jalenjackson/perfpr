import React, {Component} from 'react';

import { NavLink } from 'react-router-dom'



export default class Nav extends Component {
    render(){
        return(
            <div>

                    <section>
                        <nav className="circle">
                            <ul>
                                <img src="https://perfpr.com/wp-content/uploads/Perfect-Presence-Logo-Glow.png"/>
                                <li><a href="/" className="home-nav">Home</a></li>
                                <li><NavLink  to="/services" activeClassName="active-nav">Services</NavLink></li>
                                <li><NavLink  to="/blog" activeClassName="active-nav">Blog</NavLink></li>
                                <li><NavLink  to="/getstarted" activeClassName="active-nav">Get Started</NavLink></li>
                            </ul>
                        </nav>
                    </section>

                <i className="fa fa-bars"></i>


            </div>
        )
    }
}
