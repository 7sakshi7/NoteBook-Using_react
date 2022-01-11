import React from "react";
import animatePage from "./Animation";
import { Link } from "react-router-dom";

var screen = require("../../assets/screen.png");
var keyboard = require("../../assets/keyboard.png");
var mouse = require("../../assets/mouse.png");

const IntroPage = () => {
  React.useEffect(() => {
    animatePage();
  }, []);
  return (
    <>
      <div className="intro-1" id="home">
        <img src={screen} id="screen" />
        {/* <!-- animations (on the monitor) --> */}
        <div className="animations">
          {/* <!-- top animation --> */}
          <div className="top_anim up-transition">
            <div className="bg-grey"></div>
            <div className="top-left">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="top-end">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          {/* <!-- middle lines   --> */}
          <div className="middle up-transition one">
            <div className="small-line animated-line"></div>
            <div className="middle-line animated-line"></div>
            <div className="final-line animated-line"></div>
          </div>

          <div className="middle up-transition two">
            <div className="row">
              <div className="box-1">
                <div className="line-5 blue-line"> </div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 blue-line"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
                <div className="line-5 greyLines"></div>
              </div>
              <div className="cross-box">
                <div className="cross-line"></div>
                <div className="cross-line opp"></div>
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="box-2">
              <div className="box-2-lines-blue"></div>
              <div className="box-2-lines-blue"></div>
              <div className="box-2-lines-grey line-1"></div>
              <div className="box-2-lines-grey line-2"></div>
              <div className="box-2-lines-grey line-3"></div>
              <div className="box-2-lines-grey line-4"></div>
              <div className="box-2-lines-grey line-6"></div>
              <div className="box-2-lines-grey line-7"></div>
              <div className="box-2-lines-grey line-8"></div>
              <div className="box-2-lines-grey line-9"></div>
              <div className="box-2-lines-grey line-10"></div>
              <div className="box-2-lines-grey line-11"></div>
            </div>
          </div>

          <div className="row box-3" style={{ justifyContent: "center" }}>
            <div className="box_container container-1">
              <div className="container-circle"></div>
            </div>
            <div className="box_container container-1">
              <div className="container-circle"></div>
            </div>
            <div className="box_container container-1">
              <div className="container-circle"></div>
            </div>
          </div>
        </div>
        <img src={keyboard} id="keyboard" />
        <img src={mouse} id="mouse" />
        <div className="content">
          <div className="sub-content1">
            Content Provider For University, Assignments, NOTES, Papers &
            Visualiser
          </div>
          <div className="sub-content2">
            <div className="subpt">The web service</div>
            <div className="subpt">You didn't know you need</div>
            <div className="subpt-animation">
              For
              <div className="heading">
                <span>Assignments</span>
                <span>Video & Playlist</span>
                <span>Question Papers</span>
                <span>Handwritten Notes</span>
                <span>Alogorithm Visualiser</span>
              </div>
            </div>
          </div>
          <div className="sub-content3">Ocean of Knowledge</div>
          <div className="progress">
            <div className="progress__bar"></div>
          </div>

          <Link to="/login">
            <button className="start">Login</button>
          </Link>
          <Link to="/signUp">
            <button
              className="start"
              style={{ background: "white", color: "black" }}
            >
              Sign Up
            </button>
          </Link>
        </div>
        <div className="scroll-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </div>
      </div>
      <script></script>
    </>
  );
};

export default IntroPage;
