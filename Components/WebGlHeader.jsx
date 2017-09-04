import React, {Component} from 'react'
import Intro from './Intro'

export default class WebGlHeader extends Component {
    render(){
        return(
            <div>
                <Intro/>

                <div  className="webgl-overlay">
                    <div className="wrap">
                        <h1 className="add-slide-up" style={{animationDelay: "0.3s"}} >Your Big Idea <br/> Made Real</h1>
                        <p className="add-slide-up" style={{animationDelay: "0.6s", lineHeight: "28px"}}>You’re personal idea factory. <br/> Create and market the ideas you could only dream of.<br/>
                            Get all the resources for your idea all in one place!
                        </p>

                        <button className="button-consultation add-slide-up" style={{animationDelay: "0.9s"}}>Schedule My Consultation Today</button>
                    </div>
                </div>

                <div style={{background:"black"}} id="webgl">

                </div>
            </div>
        )
    }
}