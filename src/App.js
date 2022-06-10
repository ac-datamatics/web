import React, { useEffect, useState, useRef } from "react";
import Sidebar from "components/Sidebar";
import SidebarSUPERV from "components/SidebarSUPERV";
import RightSidebar from "components/RightSidebar";
import { Dashboard } from "components/Dashboard";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { HomeSUPERV } from "./components/Home/Home";
import { Training } from "./components/Training/Training";
import LogIn from "./components/Login/Login";
import { DashboardSUPERV } from "components/Dashboard";
import { TrainingSUPERV } from "./components/Training/Training";

export default function App(props) {
  const { userType, setGlobalTypeUser } = props.AuthFunction();

  const [renderCCP, setRenderCCP] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [loginWindow, setLoginWindow] = useState(null);
  const agentUsername = useRef("");

  useEffect(() => {
    setUserActive(JSON.parse(window.localStorage.getItem("userActive")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userActive", userActive);
  }, [userActive]);

  const handleLogin = () => {
    localStorage.removeItem("connectPopupManager::connect::loginPopup");
    console.log("HOLAAA")
    let tempWindow = window.open(
      "https://ac-datamatics.my.connect.aws/ccp-v2",
      "window2",
      "popup, width=400, height=700"
    );
    setLoginWindow(tempWindow);
    // setUserActive(true);
  };

  const handleCloseWindow = () => {
    loginWindow?.close();
    setLoginWindow(null);
  };

  const setUserInactive = () => {
    setUserActive(false);
    setRenderCCP(false);
  };

  const handleSetUserActive = () => {
    setUserActive(true);
  };

  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "left",
  //     distance: "80px",
  //     duration: 1000,
  //     reset: false,
  //   });
  //   sr.reveal(
  //     `
  //      #sidebar
  //   `,
  //     {
  //       opacity: 0,
  //     }
  //   );
  //   const sr2 = scrollreveal({
  //     origin: "right",
  //     distance: "80px",
  //     duration: 1000,
  //     reset: false,
  //   });
  //   sr2.reveal(
  //     `
  //      #rightSidebar
  //   `,
  //     {
  //       opacity: 0,
  //     }
  //   );
  // }, []);
  return (
    <div className="root">
      <div hidden={userActive}>
        <LogIn
          handleLogin={handleLogin}
        />
      </div>
      <div hidden={!userActive || (userType !== "Agent")}>
        <Router>
          <Div>
            <Sidebar
              setUserInactive={setUserInactive}
            />
            <View>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/home">
                  <Home username={agentUsername} />
                </Route>
                <Route exact path="/leaderboard">
                  <Dashboard />
                </Route>
                <Route exact path="/training">
                  <Training />
                </Route>
              </Switch>
            </View>
            <RightSidebar
              agentUsername={agentUsername}
              setUserActive={handleSetUserActive}
              setUserInactive={setUserInactive}
              userActive={userActive}
              userType={userType}
              handleLogin={handleLogin}
              loginWindow={loginWindow}
              CloseWindow={handleCloseWindow}
              setUserType={setGlobalTypeUser}
            />
          </Div>
        </Router>
      </div>
      <div hidden={!userActive || (userType != "SUPERV")}>
        <Router>
          <Div>
            <SidebarSUPERV
              setUserInactive={setUserInactive}
            />
            <View>
              <Switch>
                <Route exact path="/homeSUPERV">
                  <HomeSUPERV />
                </Route>
                <Route exact path="/leaderboardSUPERV">
                  <DashboardSUPERV />
                </Route>
                <Route exact path="/trainingSUPERV">
                  <TrainingSUPERV />
                </Route>
              </Switch>
            </View>
          </Div>
        </Router>
      </div>
      <div hidden={!userActive || (userType !== "Admin")}>
        <Router>
          <Div>
            <SidebarSUPERV
              setUserInactive={setUserInactive}
            />
            <View>
              <Switch>
                <Route exact path="/homeSUPERV">
                  <HomeSUPERV username={agentUsername}/>
                </Route>
                <Route exact path="/leaderboardSUPERV">
                  <DashboardSUPERV />
                </Route>
                <Route exact path="/trainingSUPERV">
                  <TrainingSUPERV />
                </Route>
              </Switch>
            </View>
          </Div>
        </Router>
      </div>
    </div>
  );
}

const Div = styled.div`
      display: grid;
      grid-template-columns: 1fr 12fr 4fr;
      min-height: 100vh;
      height: max-content;
      @media screen and (min-width: 280px) and (max-width: 1080px) {
        grid - template - columns: 1fr;
      height: max-content;
  }
      `;

const View = styled.div`
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      `;
