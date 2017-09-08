import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


Blog = new Mongo.Collection("blog");


export default class AccountsUIWrapper extends TrackerReact(Component) {

    blog(){
     return Blog.find().fetch();
    }

    addBlog(event){
        event.preventDefault();

        var title = this.refs.title.value;

        console.log(title);

        Blog.insert({
            title: title,
            createdAt: new Date()
        });

        this.refs.title.value = "";
    }

    componentDidMount(){
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        // Clean up Blaze view
        Blaze.remove(this.view);
    }

    render(){

        let blog = this.blog();

        console.log(this.blog()[0]);
        // Just render a placeholder container that will be filled in
        return (

            <div>
                <span ref="container"/>

                <form onSubmit={this.addBlog.bind(this)} className="blog-form">
                    <input type="text" ref="title" placeholder="Title"/>

                </form>

                <div>
                </div>

            </div>
        )
    }
}