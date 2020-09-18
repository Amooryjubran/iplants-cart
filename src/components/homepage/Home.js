import React from "react";
import Offer from "../assests/FotoJet.jpg";
import "../style/home.css";
import About from "./About";
import Galary from "./Galary";
import Services from "./Services";
import Special from "./Special";
import Review from "./Reviews";
import Loading from "./Loading";
import Collections from "./Collections/Collections";
import Collection_Second from "./Collections/Collection_Second";
import Collection__Home from "./Collections/Collection__Home";

import One from "../assests/1.jpg";
import Two from "../assests/2.jpg";
import Four from "../assests/4.jpg";

import Three from "../assests/3.jpg";
import Five from "../assests/5.png";
import Six from "../assests/6.jpg";
import Sevin from "../assests/7.jpg";

// import { Collections } from "@material-ui/icons";

export default function Home() {
  return (
    <>
      <div className="background-home" id="home">
        <div className="container" id="container-home">
          <div className="row" id="first-page">
            <div className="col-md-6">
              <img
                className="img-fluid"
                id="img-fluid-home"
                src="http://i.imgur.com/VTfKan8.png"
                alt="cactus"
                height="400"
                width="400"
              />
            </div>
            <div className="col-md-6 text-center" id="text-home">
              <h1 className="home-header">iPlants</h1>
              <p className="home-header-second">
                {" "}
                There's a reason <b>iPlants</b> fills every home on Montreal
                with plants: They add life to any room, purify your air, and
                boost your mood. Updating your house with greenery is also
                easier than ever thanks to new online plant delivery services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Special
        id="0001"
        title="EAKNANIUM"
        price={29}
        details="This is one of the best combos we have ever had, you can get a
          collection of different plants from our top selling plants. It
          comes with the top 3 selling plants along with a free plant :). it
          was chosen very carefully. It's with a free shipping.."
        image={Offer}
      />
      <Loading />
      <Collection__Home />

      <Review />
    </>
  );
}
