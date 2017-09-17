import React, {Component} from 'react';
import Footer from "./Footer";
import BlogJs from './BlogJs'
import BlogSingle from "./BlogSingle";



export default class Blog extends Component {

    constructor(){
        super();

        this.state = {
            subscription: {
                blog: Meteor.subscribe("allBlogs")
            }
        };

    }




    componentWillUnMount() {
        this.state.subscription.blog.stop();
    }

    componentDidMount(){

    }




    render(){
        Blog = BlogJs.blog;

        console.log(Blog.find({}).fetch());
        return(
            <div id="blog">
                <div className="admin-panels">

                </div>
            </div>
        )
    }
}