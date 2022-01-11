import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import NavbarMenu from "../NavbarMenu";

var designer = require("../../assets/designer.png");
var backend = require("../../assets/backend.png");
var frontend = require("../../assets/frontend.jpg");
const AboutUs = () => {
  return (
    <>
      <NavbarMenu />
      <div className="about_body">
        <div className="about_heading">
          <h1 className="neon" data-text="Team Member's Roles">
            Team Member's Roles
          </h1>
        </div>
        <div id="roles">
          <div class="box">
            <div class="imgBx">
              <img src={backend} />
            </div>
            <div class="about_content">
              <h2>
                <b>Ankit Rana</b>
                <br />
                <span>Backend Developer</span>
              </h2>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={designer} />
            </div>
            <div class="about_content">
              <h2>
                <b>Pallab Manchanda</b>
                <br />
                <span>Graphic Designer</span>
              </h2>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={frontend} />
            </div>
            <div class="about_content">
              <h2>
                <b>Sakshi Agarwal</b>
                <br />
                <span>Frontend Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div id="back-bn">
          <div class="bn">
            <Link to="/homepage">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
