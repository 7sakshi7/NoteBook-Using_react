import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/IntroPageComponent/Navbar";
import IntroPage from "./components/IntroPageComponent/IntroPage";
import IntroPage2 from "./components/IntroPageComponent/IntroPage2";
import Separator from "./components/IntroPageComponent/Separator";
import BottomBar from "./components/IntroPageComponent/BottomBar";
import Login from "./components/LoginSignUp/Login";
import HomePage from "./components/HomePageComponents/HomePage";
import AboutUs from "./components/AboutUsComponent/AboutUs";
import ChangePassword from "./components/ChangePasswordComponent/ChangePassword";
import Header from "./components/AlgoVisualizerComponent/Header";
import AlgoNavbar from "./components/AlgoVisualizerComponent/AlgoNavbar";
import description from "./visualizationData";
import Template from "./components/AlgoVisualizerComponent/Template";
import SearchingTemplate from "./components/AlgoVisualizerComponent/SearchingTemplate";
import EndingWithab from "./components/AlgoVisualizerComponent/automata/EndingWithab";
import Even0Odd1 from "./components/AlgoVisualizerComponent/automata/Even0Odd1";
import ExactlyFourOnes from "./components/AlgoVisualizerComponent/automata/ExactlyFourOnes";
import StartWith0EndWith1 from "./components/AlgoVisualizerComponent/automata/StartWith0EndWith1";
import Tm2Complement from "./components/AlgoVisualizerComponent/automata/Tm2Complement";
import ShortestPathTemplate from "./components/AlgoVisualizerComponent/Searching/ShortestPathTemplate";

function App() {
  return (
    <>
      <Routes>
        {/* initial Path */}
        <Route
          path="/"
          // element={<HomePage />}
          element={
            <>
              <Navbar />
              <IntroPage />
              <Separator class1={"separator1"} class2={"separator2"} />
              <IntroPage2 />
              <Separator class1={"separator3"} class2={"separator4"} />
              <BottomBar />
            </>
          }
        />
        <Route path="/login" element={<Login login={true} />} />
        <Route path="/signUp" element={<Login login={false} />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/algorithmvisualizer"
          element={
            <>
              <Header />
              <AlgoNavbar />
            </>
          }
        />

        {description.map((routes, index) => {
          return index < 7 ? (
            <Route
              exact
              path={routes.path}
              key={index}
              element={
                <Template
                  heading={routes.heading}
                  desc={routes.desc}
                  id={routes.id}
                />
              }
            ></Route>
          ) : index === 9 ? (
            <Route
              exact
              path={routes.path}
              key={index}
              element={<ShortestPathTemplate />} /
            >
          ) : (
            <Route
              exact 
              path={routes.path}
              key={index}
              element={<SearchingTemplate id={routes.id} />}
            ></Route>
          );
        })}
        <Route exact path="/endingwithab" element={<EndingWithab />}></Route>

        <Route exact path="/even0odd1" element={<Even0Odd1 />}></Route>
        <Route
          exact
          path="/exactlyfourones"
          element={<ExactlyFourOnes />}
        ></Route>
        <Route
          exact
          path="/startwith0andendwith1"
          element={<StartWith0EndWith1 />}
        ></Route>
        <Route exact path="/complement" element={<Tm2Complement />}></Route>
      </Routes>
    </>
  );
}

export default App;
