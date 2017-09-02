import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Blog extends Component {
    render(){
        return(
            <div id="blog">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                <h1 style={{textAlign:"center"}}>Blog</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}