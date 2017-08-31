import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

PerfectPresence = new Mongo.Collection("perfect-presence");

export default class App extends TrackerReact(Component) {

    perfectPresence(){
        return PerfectPresence.find().fetch();
    }

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
        console.log(this.perfectPresence());
        let perfectPresenceTable = this.perfectPresence();

        if(perfectPresenceTable.length < 1) {
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <h1>Perfect Presence</h1>
                <form className="perfect-presence" onSubmit={this.addPerfectPresence.bind(this)}>
                    <input type="text" ref="perfectPresence" placeholder="Test" />
                </form>

                <div>
                    {perfectPresenceTable.map((perf)=>{
                       return (
                           perf.text 
                       )
                    })}
                </div>
            </div>
        )
    }
}
