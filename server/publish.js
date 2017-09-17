Blog = new Mongo.Collection("blog");

Meteor.publish("allBlogs", function(){
    return Blog.find();
});

Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId}, {fields: { emails: 1, profile: 1 } });
});

Meteor.methods({

    addBlog(title, name, image, body, completed, createdAt) {

        if(!Meteor.userId()){
            throw new Meteor.Error('not authorized');
        }
        Blog.insert({
            title: title,
            name: name,
            image: image,
            user: Meteor.userId(),
            body: body,
            complete: completed,
            createdAt: createdAt
        });
    },

    getAllBlogs(){
        return Blog;
    },

    toggleBlog(id, status) {
        Blog.update(id, {
            $set: {complete: !status}
        });
    },

    deleteBlog(id){
        Blog.remove(id);
    }
});