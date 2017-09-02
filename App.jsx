import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Nav from "./Components/Nav";

PerfectPresence = new Mongo.Collection("perfectpresence");



export default class App extends Component {



    render(){
        return(
            <div>

                <Nav/>

            </div>
        )
    }
}
