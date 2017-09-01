import React, {Component} from 'react'

export default class PerfectPresenceForm extends Component {

    addPerfectPresence(event){
        event.preventDefault();
        var text = this.refs.perfectPresence.value.trim();

        PerfectPresence.insert({
            text: text,
            complete: false,
            createdAt: new Date()
        });

        this.refs.perfectPresence.value = "";

    }

    render(){
        return(
            <form className="perfect-presence" onSubmit={this.addPerfectPresence.bind(this)}>
                <input type="text" ref="perfectPresence" placeholder="Test" />
            </form>
        )
    }
}
