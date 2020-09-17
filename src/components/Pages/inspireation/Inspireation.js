import React from 'react';
import './inspiration.css';

import {Link} from 'react-router-dom';

export default function Inspireation() {
    return (
        <div className="portfolio">
            <div className="inspire-background">

            
            <h1 className="head-h5"><span>Get Inspired</span></h1>
              {/* <h1 className="head-h4" id="insipring"><span>Get Inspired</span></h1> */}
              <hr className="inspred-hr"/>
              
        <div className="inside-container" id="inspre-id">
        
        

       
            <div className="portfolio-center">
                
                <div class="gallery">
                <div class="gallery__item"></div>
                <div class="gallery__item">
                    <h3 class="gallery__title">Bedroom Inspiration</h3>
                    <p class="gallery__text">Classic, casual, glam or grunge. Whether you go for our "ready-to-wear" combinations or want to create something a bit more tailored to you, there's a plant ready to suit every style.</p>
                    <button class="gallery__button"><Link className="button" to="/contact">Check Out</Link></button>
                </div>
                <div class="gallery__item"></div>
                <div class="gallery__item"></div>
                <div class="gallery__item">
                    <h3 class="gallery__title">Your dream living room</h3>
                    <p class="gallery__text">Get those resolutions realized! See how you can simplify starting a new, active habit that leaves you both relaxed and refreshed. A plant will give you the mindset to be active.</p>
                    <button class="gallery__button"><Link className="button" to="/contact">Check Out</Link></button>
                </div>
                <div class="gallery__item"></div>
                <div class="gallery__item">
                    <h3 class="gallery__title">A Living kitchen</h3>
                    <p class="gallery__text">A refreshing, customized and personalized kitchen might sound like an expensive deal, but that’s when a plant enters the picture, it makes it luxuries.</p>
                    <button class="gallery__button"><Link className="button" to="/contact">Check Out</Link></button>
                </div>
                <div class="gallery__item"></div>
                </div>
                    
               
            </div>
        </div>
        </div>
    </div>
    )
}
