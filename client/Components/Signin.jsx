import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

export default class Signin extends Component {

    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }

    render(){
        return <span ref="container" />;
    }
}