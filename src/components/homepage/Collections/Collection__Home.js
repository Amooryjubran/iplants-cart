import React from "react";
import Collections from "./Collections.js";
import Collection_Second from "./Collection_Second";
import Collection__Third from "./Collection__Third";

import One from "../../assests/1.jpg";
import Two from "../../assests/2.jpg";
import Three from "../../assests/9.jpg";

function Collection__Home() {
  return (
    <div>
      <Collections
        id="0001"
        title="UASTRUIN"
        image={One}
        price={39}
        details={"A combo where you can design your bedrooms in a perfect way"}
      />
      <Collection_Second
        id="0002"
        title="THRESTARY"
        image={Two}
        price={59}
        details={
          "Enlighten your livingroom with this beautiful combo that brings happeness"
        }
      />
      <Collection__Third
        id="0003"
        title="OHACCALDA"
        image={Three}
        price={49}
        details={
          "Make your offices look pritter sith this beloved combo of our best."
        }
      />
    </div>
  );
}

export default Collection__Home;
