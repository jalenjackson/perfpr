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
            $title = $("#show-title"),
            $image = $("#blog-img"),
            title = this.props.blogInfo.title,
            body = this.props.blogInfo.body,
            image = this.props.blogInfo.image,
            bodyHTML = $.parseHTML( body );

        $title.append(title);
        $log.append( bodyHTML );
        $image.attr("src", image);

        $(".admin-blog-click-event").addClass("transform-down");
        $(".show-blog-container").addClass("");
        $(".fa-arrow-left").css({opacity: "1"});
        $(".blog-form").addClass("transform-down");
        $(".admin-h1").addClass("transform-down");
        $(".footer-div").css({display: "none"});


        setTimeout(function(){
            $('html, body').animate({scrollTop: $("nav").offset().top}, 300);
        },550);
        setTimeout(function(){
            $(".show-blog-container").css({
                opacity: "1",
                transform: "translateY(-15px)",
                pointerEvents: "auto"
            });
        },850);

        if(image !== "") {
            $(".blog-img-container").css({
                background: "url(" + image + ") center center no-repeat",
                backgroundSize: "cover"
            });
        }
        $(".blog-img-container").fadeIn("slow");
    }





    render(){

        if(!Meteor.userId()){
            return (
                <div  className="panel admin-blog-panels admin-blog-click-event ">
                    <div className="panel-text admin-blog-panel-text">
                        <img style={{marginTop: "-70px", cursor: "pointer"}} onClick={()=>{this.showBlog()}} src={this.props.blogInfo.image}/>
                        <h1 style={{cursor:"pointer"}} onClick={()=>{this.showBlog()}}>{this.props.blogInfo.title}</h1>
                        <p className="admin-p">By: {this.props.blogInfo.name}</p>



                    </div>
                </div>


            )
        }

        return(
                <div  className="panel admin-blog-panels admin-blog-click-event ">
                    <div className="panel-text admin-blog-panel-text">
                        <img style={{marginTop: "-70px", cursor: "pointer"}} onClick={()=>{this.showBlog()}} src={this.props.blogInfo.image}/>
                        <h1 style={{cursor:"pointer"}} onClick={()=>{this.showBlog()}}>{this.props.blogInfo.title}</h1>
                        <p className="admin-p">By: {this.props.blogInfo.name}</p>
                        <p style={{transform: "translateY(70px)"}}><input type="checkbox" readOnly={true} checked={this.props.blogInfo.complete} onClick={this.toggleChecked.bind(this)} /> Completed: {this.props.blogInfo.complete.toString()}</p>

                        <button className="delete-btn" onClick={this.deleteBlog.bind(this)}>Delete</button>


                    </div>
                </div>
        )
    }
}