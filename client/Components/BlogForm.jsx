import React, {Component} from 'react'

export default class BlogForm extends Component {

    addBlog(event){
        event.preventDefault();

        var title = this.refs.title.value;
        var name = this.refs.name.value;
        var image = this.refs.image.value;
        var body = this.editor.getContent();
        var completed = false;
        var createdAt = new Date();

        Meteor.call("addBlog",title, name, image, body, completed, createdAt, ()=>{
            this.refs.title.value = "";
        });

    }


    componentDidMount(){


        this.editor = new MediumEditor('.editable', {
            paste: {
                /* This example includes the default options for paste,
                 if nothing is passed this is what it used */
                forcePlainText: false,
                cleanPastedHTML: false,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir'],
                cleanTags: ['meta'],
                unwrapTags: []
            },
            toolbar: {
                buttons: [
                    'bold',
                    'italic',
                    "underline",
                    "subscript",
                    "superscript",
                    "justifyLeft",
                    "justifyCenter",
                    "justifyRight",
                    "justifyFull",
                    "removeFormat",
                    {
                        name: 'h1',
                        action: 'append-h2',
                        aria: 'header type 1',
                        tagNames: ['h2'],
                        contentDefault: '<b>H1</b>',
                        classList: ['custom-class-h1'],
                        attrs: {
                            'data-custom-attr': 'attr-value-h1'
                        }
                    },
                    {
                        name: 'h2',
                        action: 'append-h3',
                        aria: 'header type 2',
                        tagNames: ['h3'],
                        contentDefault: '<b>H2</b>',
                        classList: ['custom-class-h2'],
                        attrs: {
                            'data-custom-attr': 'attr-value-h2'
                        }
                    },
                    'justifyCenter',
                    'quote',
                    'anchor'
                ],
                placeholder: {
                    text: "Write here"
                }
            }
        });
    }

    render(){
        return (
            <div>
                <h1 className="admin-message">Lets create your awesome blog!</h1>

                <form onSubmit={this.addBlog.bind(this)} className="blog-form">
                    <div className="center-inputs">
                        <input className="admin-title" type="text" ref="title" placeholder="Title Of Blog"/>
                        <input type="text" ref="name" placeholder="Your Name"/>
                        <input type="text" ref="image" placeholder="Base 64 Image Data 1000x500"/>
                    </div>

                    <h1 className="admin-tutorial">Start writing your blog below. Highlight the text in order to style. <i className="fa fa-arrow-down"/></h1>
                    <textarea className="editable">
                        Type Your Blog Here... Or copy an existing blog to maintain styles.
                    </textarea>
                    <input className="submit-btn" type="submit" value="Submit Blog"/>
                </form>
            </div>
        )
    }
}