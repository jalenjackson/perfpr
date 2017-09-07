import React, {Component} from 'react'
import Footer from "./Footer";

export default class Blog extends Component {
    render(){
        return(
            <div id="blog">

                <div className="intro-header">
                    <div className="inner-text">

                        <h4 style={{textAlign:"center"}}><b>Perfect Presence</b> Blog</h4>

                        <i className="fa fa-search"/>
                            <input type="text" placeholder="Search Blogs"/>

                        <div className="main-blog">
                            <h4>Lorem Ipsum is simply dummy text</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <button className="button-consultation blog-button" >Check It Out</button>
                        </div>

                        <div className="blog-container">
                        <div className="blogs">
                            <img src="https://lh3.googleusercontent.com/seilkFUwbLoigqEC-tFszVZN7LJql03hX-tWRIAziHfdLVOLauucAiz1TtcEXTmUFqV8Vh4n-T74EICVvZfWK9LRada_ijk=s688"/>
                            <h1>Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="blogs">
                            <img src="https://lh3.googleusercontent.com/it1lIWxbxtfLdrfg1Y2fX-Qrw2087EUjGqEBiNwWGti5JlFiDZv1fmBBBpDVfrxwMCS0cwq8OSAkDFW9VGXFAZFlwpqWZao=s688"/>
                            <h1>Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}