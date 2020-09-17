import React from 'react';

import './blogPage.css';

 
import {ProductProvider, ProductConsumer} from '../../Context';

export default function Popular() {
    return (
<ProductConsumer>
    {value=>{
        return(
            <section className="blog">
             <div className="inside-container">
             <h1 className="photo-title" ><span id="poular-blogs">Blogs</span></h1> 
                    <div className="blog-center">
                        {value.blogItems.map(item=>{
                            return(
                                <div className="single-blog" key={item.id}>
                                <img src={item.img} alt="img"/> 
                                <div className="posts">
                                        <p>{item.date}</p>
                                        <p className="item-title">{item.title}</p>
                                        <p>{item.words}</p>
                                </div> 
                                <div className="comments">
                                        <li><a href="#"><i className="fas fa-comment"></i>{item.number1}</a></li>

                                        <li><a href="#"><i className="far fa-eye"></i>{item.number2}</a></li>

                                        <li><a href="#"><i className="fas fa-hashtag"></i></a></li>
                                </div>
                                                </div>
                            )
                        })}
                    </div>
             </div>
            </section>
        )
    }}
</ProductConsumer>
    )
}