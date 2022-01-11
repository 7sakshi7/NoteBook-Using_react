import React from "react";

var noteTaking = require("../../assets/notetaking.gif");
var youtube = require("../../assets/youtube.gif");
var searching = require("../../assets/searching.gif");
var visualizer = require("../../assets/visualizer.gif");
const IntroPage2 = () => {
  const rows = [
    {
      src: noteTaking,
      heading: "Assignments",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores unde harum molestiae atque facilis autem inventore enim reprehenderit nesciunt quis, voluptas officia sed sapiente culpa aspernatur nobis, reiciendis facere perspiciatis?",
    },
    {
      src: youtube,
      heading: "Videos and Playlist",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores unde harum molestiae atque facilis autem inventore enim reprehenderit nesciunt quis, voluptas officia sed sapiente culpa aspernatur nobis, reiciendis facere perspiciatis?",
    },
    {
      src: searching,
      heading: "Question Papers",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores unde harum molestiae atque facilis autem inventore enim reprehenderit nesciunt quis, voluptas officia sed sapiente culpa aspernatur nobis, reiciendis facere perspiciatis?",
    },
    {
      src: visualizer,
      heading: "Algorithm Visualizer",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores unde harum molestiae atque facilis autem inventore enim reprehenderit nesciunt quis, voluptas officia sed sapiente culpa aspernatur nobis, reiciendis facere perspiciatis?",
    },
  ];
  return (
    <>
      <div className="intro-2">
        <div className="intro2_container">
          <h1 id="intro2_heading">WHY DO YOU NEED US</h1>

          {/* <!-- connecting lines --> */}
          <div className="connecting_line"></div>
          <div className="connecting_line" id="two"></div>
          <div id="one"></div>

          {/* <!-- rows --> */}
          {rows.map((element, index) => {
            return index % 2 === 0 ? (
              <div className="rows" key={index}>
                <div className="image_box">
                  <div className="gif">
                    <img src={rows[index].src} alt="" />
                  </div>
                </div>
                <div className="image_content">
                  <h1>{rows[index].heading}</h1>
                  <p className="context">{rows[index].desc}</p>
                </div>
              </div>
            ) : (
              <div className="rows" key={index}>
                <div className="image_content">
                  <h1>{rows[index].heading}</h1>
                  <p className="context">{rows[index].desc}</p>
                </div>
                <div className="image_box">
                  <div className="gif">
                    <img src={rows[index].src} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default IntroPage2;
