import React, {Component} from 'react';
import Footer from './Footer';
import Intro from "./Intro";


export default class HomePage extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);

        window.sr = ScrollReveal({reset: true});

        sr.reveal('.section', 300);
    }


    render(){
        return(
            <div style={{marginTop: "-30px",background:"white"}} id="home-page">


                <div  id="pagewrap">

                    <header className="home-move1" style={{transform: "translateY(40px)"}}>
                        <p className="home-header">Your Team for Brand Success</p>
                    </header>

                    <section className="section" id="content">
                        <img src="/images/design.png"/>
                        <h5>Design</h5>
                        <p>
                            Give your brand the unique feel it deserves. Unify your marketing under one identity to help create the business environment you are striving for.
                        </p>
                    </section>

                    <section className="section" id="middle">
                        <img src="/images/strategy.png"/>

                        <h5>Strategy</h5>
                        <p>Learn to garner a powerful audience while working with our experts to grow your digital brand. What it means to experience a brand rather than to only sell it. Find the keys to your new kingdom of success.</p>
                    </section>

                    <section className="section" id="sidebar">
                        <img src="/images/development.png"/>

                        <h5>Development</h5>
                        <p>Make your idea a reality. Create anything you want to exist in the digital world! High end responsive web design, full stack app development, system automation and more.</p>
                    </section>



                </div>

                <div className="bottom-message">
                    <p>Your Brand Success Is Our Business</p>
                </div>


                <Footer/>


            </div>
        )
    }
}