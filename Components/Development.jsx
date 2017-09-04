import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Development extends Component {
    render(){
        return(
            <div id="development-div">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                    <h1 style={{textAlign:"center"}}>Development</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}