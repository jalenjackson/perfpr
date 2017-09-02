import React, {Component} from 'react';
import Nav from '../Components/Nav'
import WebGlHeader from '../Components/WebGlHeader';
import Blog from '../Components/Blog';
import GetStarted from '../Components/GetStarted';
import Services from '../Components/Services';
import HomePage from '../Components/HomePage';



import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'

export default class App extends Component {
    render(){
        return(
            <BrowserRouter>

                <div>
                    <Nav/>
                    <Route exact path='/' component={WebGlHeader} />
                    <Route exact path='/' component={HomePage} />

                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/getstarted' component={GetStarted} />
                    <Route exact path='/services' component={Services} />
                </div>

            </BrowserRouter>
        )
    }
}
