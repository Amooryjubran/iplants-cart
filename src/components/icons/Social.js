import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPagelines

} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="social-container1">
      <a
        href="www.google.com"
        className="youtube1 social"
      >
        <FontAwesomeIcon icon={faPagelines} size="1x" />
      </a>
     
    </div>
  );
}