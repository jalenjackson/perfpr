import React, {Component} from 'react'

export default class BlogSingle extends Component {


    toggleChecked(){
        Meteor.call("toggleBlog", this.props.blogInfo._id, this.props.blogInfo.complete);

    }

    componentDidMount(){
        $(".img-loader").hide();

        var isAtLocation = false;
        var title = this.props.blogInfo.title.replace(/ /g,'');

        console.log(title);
        if(window.location.pathname === "/blog/" + title){
            isAtLocation = true;
        }

        if(isAtLocation){
            this.showBlog();
        }


        $(".arrow2").click(function(){
            $(".arrow-left").css({
                opacity: "0",
                transform: "translateY(30px)"
            });
            history.pushState(null, '', '/blog');

            $('body').stop(true, false).animate({scrollTop: $("nav").offset().top}, 500);


            setTimeout(function(){
                $(".admin-blog-click-event").removeClass("transform-down");
                $(".footer-div").css({display: "none"});


            },1000);



            setTimeout(function(){
                $(".show-blog-container").css({
                    opacity: "0",
                    transform: "translateY(100px)",
                    pointerEvents: "none"
                });

            },500);

            $(".blog-form").removeClass("transform-down");
            $(".admin-h1").removeClass("transform-down");

            setTimeout(function(){
                $("#show-title").html("");
                $("#show-the-blog").html("");
            },1000);



            setTimeout(function(){
                $(".blog-img-container").css({
                    background: "url(https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/04/Instagram_Vid_Ad_shutterstock_205352527.jpg) center center no-repeat",
                    backgroundSize: "cover"
                });
            },2000);
        });



    }

    deleteBlog(){

        if(confirm("Are you sure you want to delete this blog??") === true)
            Meteor.call("deleteBlog", this.props.blogInfo._id);

    }




    showBlog(){


        history.pushState(null, '', '/blog/' + this.props.blogInfo.title.replace(/ /g,''));

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

        setTimeout(function(){
            $(".arrow-left").css({
                opacity: "1",
                transform: "translateY(0px)"
            });
        },1000);

        $(".blog-form").addClass("transform-down");
        $(".admin-h1").addClass("transform-down");
        $(".footer-div").css({display: "none"});


        setTimeout(function(){
            $('html, body').stop(true, false).animate({scrollTop: $("nav").offset().top}, 300);
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