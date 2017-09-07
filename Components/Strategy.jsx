import React, {Component} from 'react'

export default class Strategy extends Component {
    render(){
        return(
            <div id="strategy">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >
                    <h1 style={{textAlign:"center"}}>Strategy</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}