import React from "react";
import { Link } from "react-router-dom";

var SubjectIllustration = require("../assets/SubjectIllustration.png");
var MostbackShape = require("../assets/MostbackShape.png");
var BlackRectangle = require("../assets/BlackRectangle.png");
var Clock = require("../assets/Clock.png");
var Backshape = require("../assets/Backshape.png");
const NavbarMenu = () => {
  React.useEffect(() => {
    // function for showing time
    setInterval(showTime, 1000);

    function showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let am_pm = "AM";

      if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
      }
      if (hour == 0) {
        hour = 12;
        am_pm = "AM";
      }

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;

      let currentTime = hour + ":" + min + " " + am_pm;

      if(document.getElementById("time")!==undefined && document.getElementById("time")!==null)
      document.getElementById("time").innerHTML = currentTime;
    }
    showTime();
  });
  const navLink = [
    {
      name: "Home",
      path: "/homepage",
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
    {
      name: "Algorithm Visualizer",
      path: "/algorithmvisualizer",
    },
    {
      name: "Change Password",
      path: "/changepassword",
    },
    {
      name: "Notes",
      path: "/notes",
    },
  ];
  let menuOpen = false;
  function showNavbar() {
    const menuBtn = document.querySelector(".wrapper_line");
    const lmenu = document.querySelector(".left");
    const rmenu = document.querySelector(".right");
    if (!menuOpen) {
      menuBtn.classList.add("open");
      lmenu.classList.add("openL");
      rmenu.classList.add("openR");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      lmenu.classList.remove("openL");
      rmenu.classList.remove("openR");
      menuOpen = false;
    }
  }
  return (
    <>
      <div className="left" id="left_side">
        <nav>
          <ul>
            {navLink.map((nav, index) => {
              return (
                <li key={index}>
                  <Link to={nav.path}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="right ">
        <img id="boy-svg" src={SubjectIllustration} />
        <img id="boy-svg-back1" src={Backshape} />
        <img id="boy-svg-back2" src={MostbackShape} />
        <img id="clock" src={Clock} />
        <img id="top-img" src={BlackRectangle} />
        <div id="time"></div>
      </div>

      <div className="navbar" data-number="3">
        <h1 id="name" style={{ fontSize: "22px !important" }}>
          NOTEBOOK
        </h1>
        <div className="wrapper_line" onClick={showNavbar}>
          <div className="wrapper_button"></div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
