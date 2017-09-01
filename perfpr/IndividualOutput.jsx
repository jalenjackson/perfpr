import React, {Component} from 'react'

export default class IndividualOutput extends Component {
    render(){
        return (
            <li>
                {this.props.perfectPresence.text}
                {this.props.perfectPresence.complete.toString()}
            </li>
        )
    }
}