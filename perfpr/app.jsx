import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import PerfectPresenceForm from './PerfectPresenceForm'
import IndividualOutput from './IndividualOutput'


PerfectPresence = new Mongo.Collection("perfect-presence");

export default class App extends TrackerReact(Component) {

    perfectPresence(){
        return PerfectPresence.find().fetch();
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
                <PerfectPresenceForm/>

                <ul>
                    <IndividualOutput perfectPresence={perfectPresenceTable[0]}/>
                </ul>
            </div>
        )
    }
}
