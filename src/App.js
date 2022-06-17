import React, { useEffect, useState, useRef } from "react";
import Sidebar from "components/Sidebar";
import { Dashboard } from "components/Dashboard";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { HomeSUPERV } from "./components/Home/Home";
import { Training } from "./components/Training/Training";
import LogIn from "./components/Login/Login";
import { DashboardSUPERV } from "components/Dashboard";
import { TrainingSUPERV } from "./components/Training/Training";
import AmazonConnect from "./components/CCP/AmazonConnect";
import Queries from "functions/Queries";

import classes from "./App.module.css";
import { setHours } from "date-fns";

export default function App(props) {
  const { userType, setGlobalTypeUser } = props.AuthFunction();
  const { videoSupervInfo, videoAgentInfo, GetVideosData } = Queries();

  const [renderCCP, setRenderCCP] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [agent, setAgent] = useState(null);
  const loginWindow = useRef(null);

  useEffect(() => {
    setUserActive(JSON.parse(window.localStorage.getItem("userActive")));
  }, []);

  useEffect(() => {
    if (agent) {
      console.debug("MADE QUERY", agent);
      GetVideosData(agent.routingProfile.queues);
    }
  }, [agent]);

  useEffect(() => {
    window.localStorage.setItem("userActive", userActive);
  }, [userActive]);

  const handleLogin = () => {
    setRenderCCP(true);
    localStorage.removeItem("connectPopupManager::connect::loginPopup");
    console.log("HOLAAA");
    loginWindow.current = window.open(
      "https://ac-datamatics.my.connect.aws/ccp-v2",
      "window2",
      "popup, width=400, height=700"
    );
  };

  const handleCloseWindow = () => {
    loginWindow?.current.close();
    loginWindow.current = null;
  };

  const handleSetAgent = (_agent) => {
    setAgent(_agent);
  };

  const setUserInactive = () => {
    window.location.reload();
    setUserActive(false);
    setRenderCCP(false);
    setAgent(null);
  };

  const handleSetUserActive = () => {
    setUserActive(true);
  };

  window.addEventListener("beforeunload", function (e) {
    console.debug(e.type);
    setUserActive(false);
  });

  return (
    <div
      className={
        !userActive || userType !== "Agent" ? classes.root : classes.rootAgent
      }
    >
      {!userActive ? (
        <div>
          <LogIn handleLogin={handleLogin} />
        </div>
      ) : (
        <></>
      )}
      {userActive && userType === "Agent" ? (
        <div>
          <Router>
            <Div>
              <Sidebar setUserInactive={setUserInactive} />
              <View>
                <Switch>
                  <Route exact path="/home">
                    <Home username={agent.username} />
                  </Route>
                  <Route exact path="/training">
                    <Training videoInfo={videoAgentInfo} />
                  </Route>
                </Switch>
              </View>
            </Div>
          </Router>
        </div>
      ) : userActive && userType === "Admin" ? (
        <div>
          <Router>
            <DivSuperv>
              <Sidebar setUserInactive={setUserInactive} />
              <View>
                <Switch>
                  <Route exact path="/home">
                    <HomeSUPERV
                      username={agent.username}
                      videoInfo={videoSupervInfo}
                    />
                  </Route>
                  <Route exact path="/training">
                    <TrainingSUPERV videoInfo={videoSupervInfo} />
                  </Route>
                </Switch>
              </View>
            </DivSuperv>
          </Router>
        </div>
      ) : (
        <></>
      )}
      {renderCCP ? (
        <AmazonConnectContainer
          className="amazonConnectContainer"
          hidden={userType !== "Agent" || !userActive}
        >
          <AmazonConnect
            agent={agent}
            setAgent={handleSetAgent}
            setUserActive={handleSetUserActive}
            setUserInactive={setUserInactive}
            userActive={userActive}
            userType={userType}
            loginWindow={loginWindow}
            CloseWindow={handleCloseWindow}
            setUserType={setGlobalTypeUser}
          />
        </AmazonConnectContainer>
      ) : (
        <></>
      )}
    </div>
  );
}

const Div = styled.div`
display: grid;
grid-template-columns: 1fr 12fr;
min-height: 100vh;
height: max-content;
@media screen and (min-width: 280px) and (max-width: 1080px) {
  grid - template - columns: 1fr;
      height: max-content;
  }
      `;

const DivSuperv = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr;
  min-height: 100vh;
  widthL 100%
  height: max-content;
`;

const View = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

const AmazonConnectContainer = styled.div`
  position: relative;
  width: 100%;
`;
