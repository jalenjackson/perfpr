import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Design extends Component {
    render(){
        return(
            <div id="design-div">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                    <h1 style={{textAlign:"center"}}>Design</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}