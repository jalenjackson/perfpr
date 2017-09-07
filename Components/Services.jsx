import React, {Component} from 'react';




export default class Services extends Component {
    render(){
        return(
            <div>

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="change"
                    transitionEnterTimeout={6000}
                    transitionAppearTimeout={2000}
                    transitionLeaveTimeout={4000}
                    transitionAppear={true}
                >

                <h1 style={{textAlign:"center"}}>Services</h1>

                </ReactCSSTransitionGroup>


            </div>
        )
    }
}
