import React, {Component} from 'react'
import ReactDOM from 'react-dom'

PerfectPresence = new Mongo.Collection("perfectpresence");



export default class App extends Component {

    addPerfectPresence(event){
        event.preventDefault();
        var text = this.refs.perfectpresence.value.trim();

        PerfectPresence.insert({
            text: text,
            complete: false,
            createdAt: new Date()

        });

        this.refs.perfectpresence.value = "";
    }

    render(){
        return(
            <div>

                <h1>Perfect Presence</h1>
                <form className="perfect-presence" onSubmit={this.addPerfectPresence.bind(this)}>
                    <input type="text" ref="perfectpresence" placeholder="test" />
                </form>
            </div>
        )
    }
}
