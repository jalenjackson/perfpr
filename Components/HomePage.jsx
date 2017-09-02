import React, {Component} from 'react'

export default class HomePage extends Component {
    render(){
        return(
            <div style={{marginTop:"30px"}} id="get-started">

                <div id="pagewrap">

                    <header>
                        <p>Your Team for Brand Success</p>
                    </header>

                    <section id="content">
                        <img src="/images/design.png"/>
                        <h5>Design</h5>
                        <p>
                            Give your brand the unique feel it deserves. Unify your marketing under one identity to help create the business environment you are striving for.
                        </p>
                    </section>

                    <section id="middle">
                        <img src="/images/strategy.png"/>

                        <h5>Strategy</h5>
                        <p>Learn to garner a powerful audience while working with our experts to grow your digital brand. What it means to experience a brand rather than to only sell it. Find the keys to your new kingdom of success.</p>
                    </section>

                    <section id="sidebar">
                        <img src="/images/development.png"/>

                        <h5>Development</h5>
                        <p>Make your idea a reality. Create anything you want to exist in the digital world! High end responsive web design, full stack app development, system automation and more.</p>
                    </section>



                </div>

                <div className="bottom-message">
                    <p>Your Brand Success Is Our Business</p>
                </div>

                <div className="footer">

                    <div className="bottom-footer">
                    </div>
                </div>



            </div>
        )
    }
}