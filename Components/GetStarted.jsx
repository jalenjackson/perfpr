import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class GetStarted extends Component {
    render(){
        return(
            <div id="get-started">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                <h1 style={{textAlign:"center"}}>Get Started</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}