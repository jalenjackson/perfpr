import React, {Component} from 'react'

export default class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="footer fixed_footer">
                    <img src="/images/footerlogo.png"/>

                    <div style={{transform: "translateY(50px)"}} id="pagewrap">

                        <section id="content">
                            <h5>About Us</h5>
                            <p>
                                High End digital brand development firm that specializes in creating unique digital products for businesses, brands and entrepreneurs. We specialize in working with small local businesses to create digital services that will help them grow their business. Our development is geared toward unparalleled design, development, branding and strategy for anything you want to create.
                            </p>

                        </section>

                        <section id="middle">

                            <h5>Our Site</h5>
                            <a>Home</a>
                            <a>Blog</a>
                            <a>Design</a>
                            <a>Strategy</a>
                            <a>Development</a>
                            <a>Contact Us</a>
                            <a>Terms Of Service</a>
                        </section>

                        <section id="sidebar">

                            <h5>Get In Touch</h5>
                            <h1>Phone</h1>
                            <h1>301.798.6192</h1>
                        </section>



                    </div>

                </footer>

            </div>
        )
    }
}

