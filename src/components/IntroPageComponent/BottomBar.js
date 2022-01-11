import React from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <>
      <div className="intro-3">
        <div className="col">
          <h1 style={{position: "relative",left: "-5rem"}}>Contact Us</h1>
          <h1 id="email">
            <span></span>NoteBook@gmail.com
            <br />
            +91 8700917756
          </h1>
          <div className="social">
            <div className="social-circles">
              <svg
                x="0px"
                y="0px"
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                enableBackground="new 0 0 18 18"
              >
                <path
                  fill="#f2f2f2"
                  d="M9,2C6.757,2,6.4,2.006,5.381,2.052C3.144,2.155,2.155,3.143,2.053,5.381C2.006,6.398,2,6.754,2,9
                        c0,2.243,0.006,2.601,0.052,3.619c0.103,2.237,1.091,3.227,3.328,3.329C6.4,15.994,6.757,16,9,16c2.243,0,2.601-0.006,3.619-0.052
                        c2.236-0.103,3.227-1.093,3.328-3.329C15.994,11.603,16,11.246,16,9c0-2.243-0.006-2.6-0.052-3.62
                        c-0.101-2.234-1.091-3.225-3.329-3.327C11.603,2.006,11.246,2,9,2z M9,0c2.444,0,2.751,0.011,3.712,0.055
                        c3.271,0.15,5.087,1.97,5.233,5.235C17.989,6.25,18,6.556,18,9s-0.011,2.751-0.055,3.711c-0.148,3.271-1.969,5.085-5.234,5.234
                        C11.751,17.989,11.444,18,9,18s-2.75-0.011-3.711-0.055c-3.271-0.149-5.085-1.966-5.235-5.234C0.011,11.751,0,11.444,0,9
                        s0.011-2.75,0.055-3.711c0.15-3.271,1.967-5.085,5.235-5.235C6.25,0.011,6.556,0,9,0z"
                ></path>

                <path
                  fill="#f2f2f2"
                  d="M9,4.378C6.448,4.378,4.378,6.448,4.378,9c0,2.553,2.069,4.622,4.622,4.622
                        c2.553,0,4.621-2.069,4.621-4.622C13.621,6.448,11.553,4.378,9,4.378z M9,12c-1.657,0-3-1.343-3-3c0-1.657,1.343-3,3-3
                        c1.656,0,3,1.343,3,3C12,10.657,10.656,12,9,12z M13.805,3.116c-0.598,0-1.081,0.484-1.081,1.08s0.483,1.08,1.081,1.08
                        c0.596,0,1.079-0.484,1.079-1.08S14.4,3.116,13.805,3.116z"
                ></path>
              </svg>
            </div>
            <div className="social-circles">
              <svg
                x="0px"
                y="0px"
                width="8px"
                height="16px"
                viewBox="0 0 8 16"
                enableBackground="new 0 0 8 16"
              >
                <path
                  fill="#f2f2f2"
                  d="M5.193,15.404V8.378h2.357L7.904,5.64H5.193V3.891c0-0.793,0.219-1.333,1.356-1.333L8,2.557
                        V0.108C7.749,0.075,6.889,0,5.887,0C3.796,0,2.365,1.276,2.365,3.62v2.02H0v2.738h2.365v7.026H5.193z"
                ></path>
              </svg>
            </div>
            <div className="social-circles">
              <svg
                x="0px"
                y="0px"
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
                enableBackground="new 0 0 15 15"
              >
                <path
                  fill="#f2f2f2"
                  d="M3.254,14.113H0.155V4.817h3.099V14.113z M1.705,3.437C0.764,3.437,0,2.668,0,1.718
                        C0,0.77,0.762,0,1.705,0c0.942,0,1.704,0.77,1.704,1.718C3.409,2.668,2.645,3.437,1.705,3.437z M14.1,14.113h-3.096V9.682
                        c0-2.915-3.102-2.669-3.102,0v4.432H4.803V4.817h3.099v1.693C9.254,4.007,14.1,3.821,14.1,8.909V14.113z"
                ></path>
              </svg>
            </div>
            <div className="social-circles">
              <svg
                x="0px"
                y="0px"
                width="18px"
                height="15px"
                viewBox="0 0 18 15"
                enableBackground="new 0 0 18 15"
              >
                <path
                  fill="#f2f2f2"
                  d="M18,1.732c-0.662,0.294-1.374,0.492-2.121,0.581c0.763-0.457,1.349-1.181,1.624-2.043
                            C16.789,0.693,15.999,1,15.158,1.166C14.484,0.448,13.523,0,12.462,0c-2.384,0-4.136,2.225-3.598,4.534
                            C5.796,4.38,3.075,2.91,1.253,0.676c-0.968,1.66-0.502,3.831,1.142,4.931c-0.604-0.02-1.174-0.186-1.672-0.462
                            C0.683,6.855,1.91,8.455,3.686,8.812c-0.52,0.142-1.089,0.175-1.668,0.063c0.469,1.467,1.833,2.534,3.45,2.564
                            C3.915,12.656,1.959,13.2,0,12.969c1.634,1.048,3.576,1.659,5.661,1.659c6.856,0,10.729-5.79,10.496-10.984
                            C16.879,3.122,17.505,2.472,18,1.732z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="col">
          <h1 id="intro3_heading">Your cup of tea?</h1>
          <h1 id="intro3_heading2">Lets Start</h1>
          <Link to = "/login">
            <button className="start" id="intro3_button">
              Login
            </button>
          </Link>
        </div>
        <div className="col">
          <div id="clockContainer">
            <div id="hour"></div>
            <div id="minute"></div>
            <div id="second"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;