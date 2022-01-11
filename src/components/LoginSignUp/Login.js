import React from "react";
import "./Login.css";
import anime from "../../anime-master/lib/anime.es.js";

var authentication = require("../../assets/authentication.svg");
var developer = require("../../assets/developer.svg");
const Login = (props) => {
  return (
    <div className="login_body">
      <div className="bg_animation"></div>

      <div className="login_container">
        {/* <!-- if we want ki sign up page khule to jis input ki value c1 wha attribute daal do checked --> */}
        {props.login === false ? (
          <input type="checkbox" id="c1" defaultChecked/>
        ) : (
          <input type="checkbox" id="c1"/>
        )}
        <input type="checkbox" id="c2"/>

        <div id="cover">
          <div className="sign-up login">
            <h1>Login</h1>
            <form action="">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" aria-hidden="true" className="email" />
              </div>

              {/* <!-- forgot password --> */}
              <a
                href="./password_reset_form.html"
                style={{
                  position: "absolute",
                  left: "22rem",
                  top: "22rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Forgot Password
              </a>
              {/* <!--  --> */}

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" aria-hidden="true" id="password" />
              </div>

              <input type="submit" value="SUBMIT" className="submit-btn" />
            </form>

            <p>Don't Have An Account?</p>
          </div>
        </div>
        <div className="flip-book">
          <div className="flip" id="p1">
            <div className="back">
              <div id="image_container">
                <img src={authentication} alt="" />
              </div>
            </div>

            <div
              className="front"
              style={{ background: "#212121", color: "white" }}
            >
              {/* <!-- Login  --> */}
              <div className="wrapper">
                <img src={developer} alt="" />
              </div>
              <label htmlFor="c1" className="next-btn">
                Sign Up
              </label>
            </div>
          </div>

          <div className="flip " id="p2">
            <div className="front">
              <div className="sign-up">
                <h1>Sign Up</h1>
                <form action="" autoComplete="off">
                  <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" aria-hidden="true" id="username" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" aria-hidden="true" className="email" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" aria-hidden="true" />
                  </div>

                  <input type="submit" value="SUBMIT" className="submit-btn"/>
                </form>

                <p>
                  Already Have An Account?{" "}
                  <label
                    htmlFor="c1"
                    className="back-btn"
                    style={{ position: "relative", top: "1px", left: "3px" }}
                  >
                    Login
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
