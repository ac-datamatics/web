import Sidebar from "./components/ResponsiveDrawer";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Tabs/Home/Home";
import Leaderboard from "./components/Tabs/Leaderboard";
import Training from "./components/Tabs/Training/Training";
import AmazonConnect from "./components/CCP/AmazonConnect";
import "./App.css";
import React, { useEffect, useState } from "react";

function App(props) {
  const {
    // userActive,
    userType,
    loginWindow,
    loging,
    CloseWindow,
    // setUserActive,
    // setUserInactive,
    setUserType,
  } = props.AuthFunction();

  const [renderCCP, setRenderCCP] = useState(false);
  const [userActive, setUserActive] = useState(false);

  useEffect(() => {
    setUserActive(JSON.parse(window.localStorage.getItem("userActive")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userActive", userActive);
  }, [userActive]);

  const handleLogin = () => {
    localStorage.removeItem("connectPopupManager::connect::loginPopup");
    setRenderCCP(true);
    // setUserActive(true);
  };

  const setUserInactive = () => {
    setUserActive(false);
  };

  const handleSetUserActive = () => {
    setUserActive(true);
  };

  return (
    <div className="root">
      <div hidden={userActive}>
        <p>Loading...</p>
        <p>Pleas login in Amazon connect</p>
        <button onClick={handleLogin}> Login </button>
        <button onClick={() => console.debug(userActive)}> User Active </button>
      </div>

      <div className="sideBarContainer" hidden={!userActive}>
        <Sidebar className="sideBar">
          <Route path="*" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/leaderboard" exact>
            <Leaderboard />
          </Route>
          <Route path="/training" exact>
            <Training />
          </Route>
          {/* <Route path="/screen-recording" exact>
            <ScreenRecording />
          </Route> */}
        </Sidebar>
      </div>
      {renderCCP || userActive ? (
        <div className="amazonConnectContainer" hidden={!userActive}>
          <AmazonConnect
            setUserActive={handleSetUserActive}
            setUserInactive={setUserInactive}
            userActive={userActive}
            userType={userType}
            loging={loging}
            loginWindow={loginWindow}
            CloseWindow={CloseWindow}
            setUserType={setUserType}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
