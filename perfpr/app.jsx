import React, {Component} from 'react'
import ReactDOM from 'react-dom'

PerfectPresence = new Mongo.Collection("perfect-presence");

export default class App extends Component {

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
        return (
            <div>
                <h1>Perfect Presence</h1>
                <form className="perfect-presence" onSubmit={this.addPerfectPresence.bind(this)}>
                    <input type="text" ref="perfectPresence" placeholder="Test" />
                </form>
            </div>
        )
    }
}
