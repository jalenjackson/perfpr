import React, {Component} from 'react';


export default class Nav extends Component {
    render(){
        return(
            <div>

                    <section>
                        <nav className="circle">
                            <ul>
                                <img src="https://perfpr.com/wp-content/uploads/Perfect-Presence-Logo-Glow.png"/>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Get Started</a></li>
                            </ul>
                        </nav>
                    </section>

            </div>
        )
    }
}
