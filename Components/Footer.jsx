import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


export default class Footer extends Component {
    render(){
        return(
            <div className="footer-div">
                <footer className="footer fixed_footer">
                    <img src="/images/footerlogo.png"/>

                    <div style={{ background:"black", transform: "translateY(100px)"}} id="pagewrap">

                        <section id="content">
                            <h5 style={{color:"white"}}>About Us</h5>
                            <p>
                                High End digital brand development firm that specializes in creating unique digital products for businesses, brands and entrepreneurs. We specialize in working with small local businesses to create digital services that will help them grow their business. Our development is geared toward unparalleled design, development, branding and strategy for anything you want to create.
                            </p>

                        </section>

                        <section id="middle">

                            <h5 style={{color:"white"}}>Our Site</h5>
                            <a href="/">Home</a>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/design">Design</NavLink>
                            <NavLink to="/strategy">Strategy</NavLink>
                            <NavLink to="/development">Development</NavLink>
                            <NavLink to="/getstarted">Contact Us</NavLink>
                            <NavLink to="/tos">Terms Of Service</NavLink>
                        </section>

                        <section id="sidebar">

                            <h5 style={{color:"white"}}>Get In Touch</h5>
                            <p>Phone - 301.798.6192</p>
                            <p>Email - info@perfpr.com</p>
                            <p>Weekly Hours - Mon - Fri 8:30am to 9:00pm
                                Sat-Sun: 10:00am to 9:00pm</p>
                        </section>



                    </div>

                </footer>

            </div>
        )
    }
}

