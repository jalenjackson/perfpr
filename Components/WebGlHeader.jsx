import React, {Component} from 'react'

export default class WebGlHeader extends Component {
    render(){
        return(
            <div>
                <div className="webgl-overlay">
                    <div className="wrap">
                        <h1 className="slide-up">Your Big Idea <br/> Made Real!</h1>
                        <p className="slide-up" style={{animationDelay: "0.3s"}}>You’re personal idea factory. Create and market <br/> the ideas you could only dream of.<br/>
                            Get all the resources for your idea all in one place!
                        </p>

                        <button className="button-consultation slide-up" style={{animationDelay: "0.6s"}}>Schedule My Consultation Today</button>
                    </div>
                </div>

                <div id="webgl">

                </div>
            </div>
        )
    }
}