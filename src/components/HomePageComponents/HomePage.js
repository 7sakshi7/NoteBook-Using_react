import React from "react";
import "./HomePage.css";
import subjects from "./Semester";
import NavbarMenu from "../NavbarMenu";

const HomePage = () => {
  const [currSem, setCurrSem] = React.useState(0);
  const sem = ["Sem1", "Sem2", "Sem3", "Sem4", "Sem5", "Sem6", "Sem7", "Sem8"];
  return (
    <>
      <NavbarMenu />
      <div className="container_fluid">
        <div className="image_container">
          <div className="overlay"></div>
          <h1>Welcome To</h1>
          <h1 className="ntbk">NoteBook</h1>
          <div className="scroll-container-home">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        </div>

        {/* <!-- Semester --> */}
        <h2 style={{ marginTop: "2rem" }}>Semester</h2>
        <div className="sem_container">
          <div className="semester">
            {sem.map((semElement, index) => {
              return currSem === index ? (
                <div
                  className="sem active_sem"
                  key={index}
                  onClick={() => setCurrSem(index)}
                >
                  <span>{semElement}</span>
                </div>
              ) : (
                <div
                  className="sem"
                  key={index}
                  onClick={() => setCurrSem(index)}
                >
                  <span>{semElement}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* <!-- end --> */}

        {/* <!-- Divider --> */}
        <div className="divider"></div>
        {/* <!-- end --> */}

        {/* <!-- Subject --> */}
        <div className="subject_container">
          {subjects[currSem].map((sub, index) => {
            return (
              <div className="card"key={index}>
                <div className="sub-content">
                  <h2 className="subcode">{sub.subcode}</h2>
                  <h3 className="subname">{sub.subname}</h3>
                  <br />
                  <p className="desc">{sub.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
