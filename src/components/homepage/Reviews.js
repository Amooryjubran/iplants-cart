import React from 'react';
import '../style/reviews.css';


export default function Review() {
    return (
        <div>
            <div class="section bg" id="reviews-all">
  <div class="container123">
    <h1 id="doooona"><span className="span-review">Reviews</span></h1>
    {/* <h2>From our beloved people</h2> */}
    <div class="col two bg margin extrapad" id="reviews-first">
      <h1 class="icon side"><img src="https://i.ibb.co/7YHsvh8/Screen-Shot-2020-02-16-at-10-42-08-AM.png" alt="dona" className="dona"  /></h1>
      <span class="feature side">Dona</span><span class="side"> - A PHD history major</span>
      <p class="side">I have always found passion on plants, and iPlants forfilled it for me </p>
      <div className="stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
    </div>
    </div>
    
    <div class="col two bg margin extrapad">
      <h1 class="icon side"><img src="https://randomuser.me/api/portraits/men/54.jpg" alt="dona" className="dona3"  /></h1>
      <span class="feature side">Tyrone</span><span class="side"> - A Civil Engineer</span>
      <p class="side">Quick, responsive, and fast. I ordered it a two days ago, and it was delievered today. Highly recomended:) </p>
      <div className="stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
    </div>
    </div>
    <div class="group margin"></div>
    <div class="col two bg margin extrapad">
      <h1 class="icon side"><img src="https://randomuser.me/api/portraits/women/50.jpg" alt="dona" className="dona2"  /></h1>
      <span class="feature side">Sara</span><span class="side"> - A Jornulist writer</span>
      <p class="side">I enjoy writing article on a beautilful sight, and iPlants provided me with beautilful plants makes me happy </p>
      <div className="stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
    </div>
    </div>
    <div class="col two bg margin extrapad">
      <h1 class="icon side"><img src="https://randomuser.me/api/portraits/women/91.jpg" alt="dona" className="dona2"  /></h1>
      <span class="feature side">Kim</span><span class="side"> - A French teacher</span>
      <p class="side">My students love my class room since I added a few products from iPlants, we are loving it.</p>
      <div className="stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
    </div>
    </div>
    <div class="group"></div>
  </div>
</div>

        </div>
    )
}