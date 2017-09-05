import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Design extends Component {
    render(){
        return(
            <div id="design-div">


                    <div className="quick-links">
                        <div style={{background: "rgb(21,21,21)"}} className="quick-link-img">
                            <h4>Design</h4>
                        </div>
                        <div style={{background: "rgb(21,21,21)"}} className="quick-link-img">
                            <h4>Strategy</h4>
                        </div>
                        <div style={{background: "rgb(21,21,21)"}} className="quick-link-img">
                            <h4>Development</h4>
                        </div>

                    </div>

                <div className="design-header">
                    <div className="design-info">
                        <h1>Visual Design</h1>
                        <p>Tie It All Together And Put a Nice Bow On It!</p>
                    </div>
                </div>
            </div>

        )
    }
}