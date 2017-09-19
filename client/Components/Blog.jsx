import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BlogForm from "./BlogForm";
import BlogSingle from "./BlogSingle";

import BlogJs from './BlogJs';
import Footer from "./Footer";

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

    componentDidMount(){
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
            <div   id="admin-blog">

                <BlogForm/>

                <h1  className="admin-h1"><span style={{borderBottom: "3px solid black"}}>Current Blogs</span></h1>
                <div  className="admin-panels">
                    {this.blog().map(function(blog){
                        return <BlogSingle key={blog.__id} blogInfo={blog}/>
                    })}
                </div>


                <div className="arrow-left">
                    <img className="arrow2" src="https://maxcdn.icons8.com/Share/icon/Arrows//left_arrow1600.png"/>
                </div>

                <div className="show-blog-container">
                    <div style={{background: "url(https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/04/Instagram_Vid_Ad_shutterstock_205352527.jpg) center center no-repeat", backgroundSize: "cover"}} className="blog-img-container">

                    </div>
                    <h1 id="show-title"></h1>
                    <div id="show-the-blog">
                    </div>
                </div>

                <Footer/>

            </div>
)
        }


        return (

            <div   id="admin-blog">


                    <h1   className="admin-h1 admin-h12">Perfect Presence <span style={{color:"grey"}}>Blog</span></h1>

                <div  className="admin-panels ">
                    <div className="img-loader"></div>
                    {this.blog().map(function(blog){
                        return <BlogSingle key={blog.__id} blogInfo={blog}/>
                    })}
                </div>

                <div className="arrow-left">
                    <img className="arrow2" src="https://maxcdn.icons8.com/Share/icon/Arrows//left_arrow1600.png"/>
                </div>

                <div className="show-blog-container">
                    <div style={{background: "url(https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/04/Instagram_Vid_Ad_shutterstock_205352527.jpg) center center no-repeat", backgroundSize: "cover"}} className="blog-img-container">

                    </div>
                    <h1 id="show-title"></h1>
                    <div id="show-the-blog">
                    </div>
                </div>

                <Footer/>

            </div>

        )
    }
}

