import React from "react";
import "../style/Galary.css";
import Title from "../Title";
import One from "../assests/1.jpg";
import Two from "../assests/2.jpg";
import Four from "../assests/4.jpg";
import Five from "../assests/5.png";
import Six from "../assests/6.jpg";
import Seven from "../assests/7.jpg";
import Eight from "../assests/8.jpg";
import Nine from "../assests/9.jpg";
import Three from "../assests/3.jpg";
import { Link } from "react-router-dom";

export default function Specials() {
  return (
    <div class="container">
      <div className="Photos-name">
        <h1 className="photo-title">
          <span>Our Collections</span>
        </h1>
        <hr className="photos-hr" />
      </div>

      <Title title="Uastruin" color="#323232" id="title-galary" />
      <div class="row">
        <a
          href={One}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4 "
        >
          <img
            src={One}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Two}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4"
        >
          <img
            src={Two}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Four}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4"
        >
          <img
            src={Four}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
      </div>
      <div className="galary2-buttons">
        <hr className="galary2-hr" />
        <p className="galary2-buttons-p">
          A combo where you can design your bedrooms in a perfect way
        </p>
        <p className="galary2-buttons-p2">Bedrooms/LivingRoom/GuestRoom</p>
        <hr className="galary2-hr2" />
        <button className="buy-it">
          <Link className="button" to="/inspiration">
            Buy $39
          </Link>
        </button>
        <hr className="galary2-hr3" />
      </div>

      <Title title="Threstary" color="#323232" id="title-galary" />
      <div class="row">
        <a
          href={Five}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-3 "
        >
          <img
            src={Five}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Six}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-3"
        >
          <img
            src={Six}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Seven}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-3"
        >
          <img
            src={Seven}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Eight}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-3"
        >
          <img
            src={Eight}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
      </div>
      <div className="galary2-buttons">
        <hr className="galary2-hr" />
        <p className="galary2-buttons-p">
          Enlighten your livingroom with this beautiful combo that brings
          happeness
        </p>
        <p className="galary2-buttons-p2">LivingRoom/Bedrooms/Kitchen</p>
        <hr className="galary2-hr2" />
        <button className="buy-it">
          <Link className="button" to="/inspiration">
            Buy $39
          </Link>
        </button>
        <hr className="galary2-hr3" />
      </div>

      <Title title="Ohaccalda" color="#323232" id="title-galary" />
      <div class="row">
        <a
          href={Nine}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4"
        >
          <img
            src={Nine}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Three}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4"
        >
          <img
            src={Three}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
        <a
          href={Two}
          data-toggle="lightbox"
          data-gallery="gallery"
          class="col-md-4"
        >
          <img
            src={Two}
            class="img-fluid rounded"
            id="img-fluid-galary"
            alt=""
          />
        </a>
      </div>
      <div className="galary2-buttons">
        <hr className="galary2-hr" />
        <p className="galary2-buttons-p">
          Make your offices look pritter sith this beloved combo of our best.
        </p>
        <p className="galary2-buttons-p2">OfficeRoom/Balcaony/BackYard</p>
        <hr className="galary2-hr2" />
        <button className="buy-it">
          <Link className="button" to="/inspiration">
            Buy $39
          </Link>
        </button>
        <hr className="galary2-hr3" />
      </div>
    </div>
  );
}
