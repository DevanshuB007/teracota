import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className='hero-container'>
            <div className="hero-text">
                <div className="gif-container2">
                    <img src="//creative-ishi.myshopify.com/cdn/shop/files/lf20_gt7ccog0.json_3.gif?v=1679653484" alt="gif"></img>
                </div>
               <span className='hero-text-sub-heading'>THE CANVAS STORY</span>
               <span className="hero-text-heading">TERRA COTTA</span>
               <p className='hero-text-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illo atque nostrum laboriosam maiores quasi, dolores tempora dolorum ipsa, eum natus id cum doloribus iure explicabo quibusdam tenetur est accusantium.</p>
            <div className="btn">
                <div className='shopnow'>SHOP NOW</div>
                <div className='readmore'>READ MORE</div>
            </div>
            </div>
            <div className="hero-image">
                <div className="gif-container1">
                <img src="//creative-ishi.myshopify.com/cdn/shop/files/lf20_gt7ccog0.json_3.gif?v=1679653484" alt="gif"></img>
                </div>
                <img src="//creative-ishi.myshopify.com/cdn/shop/files/Rectangle_114_1_copy.png?v=1679569198" alt="productImg" height="400" width="400"></img>
            </div>
            <section>
                <div className="wavey wave1">
                </div>
            </section>
        </div>
    )
}
export default Hero
