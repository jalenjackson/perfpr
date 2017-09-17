import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BlogForm from "./BlogForm";
import BlogSingle from "./BlogSingle";

import BlogJs from './BlogJs';

Blog = BlogJs.blog;


export default class AccountsUIWrapper extends TrackerReact(Component) {

    constructor(){
        super();

        this.state = {
            subscription: {
                blog: Meteor.subscribe("allBlogs")
            }
        };
    }

    componentWillUnMount(){
        this.state.subscription.blog.stop();
    }

    blog(){
     return Blog.find().fetch();
    }


    toggleChecked(){
        console.log(this.blog().__id);
        Meteor.call("toggleBlog", this.blog().__id, this.blog().complete);
    }

    render(){

        let blog = this.blog();
        var user = Meteor.user();
        var email = user && user.emails && user.emails[0].address;
        console.log(email);



        if(Meteor.userId()) {
return (
            <div  id="admin-blog">
                <BlogForm/>

                <h1 className="admin-h1"><span style={{borderBottom: "3px solid black"}}>Current Blogs</span></h1>
                <div className="admin-panels">
                    {this.blog().map(function(blog){
                        return <BlogSingle key={blog.__id} blogInfo={blog}/>
                    })}
                </div>
            </div>
)
        }


        return (

            <div  id="admin-blog">
                <h1 className="admin-h1"><span style={{borderBottom: "3px solid black"}}>Current Blogs</span></h1>
                <div  className="admin-panels">
                    {this.blog().map(function(blog){
                        return <BlogSingle key={blog.__id} blogInfo={blog}/>
                    })}
                </div>

                <div id="show-the-blog">
                    Hello world
                </div>
            </div>

        )
    }
}

