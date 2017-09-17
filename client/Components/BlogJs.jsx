
class BlogJs {
    constructor(){
        this.blog = new Mongo.Collection("blog");

    }
}

export default (new BlogJs);
