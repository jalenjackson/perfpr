import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Nav from "./Components/Nav";
import WebGlHeader from "./Components/WebGlHeader";
import App from "./App";

PerfectPresence = new Mongo.Collection("perfectpresence");



export default class Index extends Component {



    render(){
        return(
            <div>

                <App/>

            </div>
        )
    }
}

Meteor.startup(function () {
    ReactDOM.render(<Index />, document.getElementById("render-target"));
});
