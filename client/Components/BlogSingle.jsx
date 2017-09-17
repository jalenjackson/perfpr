import React, {Component} from 'react'

export default class BlogSingle extends Component {


    toggleChecked(){
        Meteor.call("toggleBlog", this.props.blogInfo._id, this.props.blogInfo.complete);

    }

    deleteBlog(){

        if(confirm("Are you sure you want to delete this blog??") === true)
            Meteor.call("deleteBlog", this.props.blogInfo._id);

    }


    showBlog(){

        var $log = $( "#show-the-blog" ),
            str = this.props.blogInfo.body,
            html = $.parseHTML( str ),
            nodeNames = [];

        var text = $("#blog-data").html();
        console.log(text);

        $log.append( html );

        $(".admin-blog-click-event").hide();
    }




    render(){

        if(!Meteor.userId()){
            return (
                <div onClick={()=>{this.showBlog()}} className="panel admin-blog-panels admin-blog-click-event ">
                    <div   className="panel-text">
                        <img style={{marginTop: "-70px"}} src={this.props.blogInfo.image}/>
                        <h1>{this.props.blogInfo.title}</h1>
                        <p>By: {this.props.blogInfo.name}</p>
                    </div>

                    <div className="blog-body">
                        <p className="blog-data">{this.props.blogInfo.body}</p>
                    </div>
                </div>


            )
        }

        return(
                <div className="panel admin-blog-panels ">
                    <div className="panel-text">
                        <img style={{marginTop: "-70px"}} src={this.props.blogInfo.image}/>
                        <h1>{this.props.blogInfo.title}</h1>
                        <p>By: {this.props.blogInfo.name}</p>
                        <input type="checkbox" readOnly={true} checked={this.props.blogInfo.complete} onClick={this.toggleChecked.bind(this)} />
                        <p style={{transform: "translateY(70px)"}}>Completed: {this.props.blogInfo.complete.toString()}</p>

                        <button className="delete-btn" onClick={this.deleteBlog.bind(this)}>Delete</button>
                    </div>
                </div>
        )
    }
}