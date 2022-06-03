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
    // loginWindow,
    loging,
    // CloseWindow,
    // setUserActive,
    // setUserInactive,
    setUserType,
  } = props.AuthFunction();

  const [renderCCP, setRenderCCP] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [loginWindow, setLoginWindow] = useState(null);

  useEffect(() => {
    setUserActive(JSON.parse(window.localStorage.getItem("userActive")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userActive", userActive);
  }, [userActive]);

  const handleLogin = () => {
    localStorage.removeItem("connectPopupManager::connect::loginPopup");
    let tempWindow = window.open(
      "https://ac-datamatics.my.connect.aws/ccp-v2",
      "window2",
      "popup, width=400, height=700"
    );
    setLoginWindow(tempWindow);
    setRenderCCP(true);
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

  return (
    <>
      {/* {alert("APP")} */}
      <div className="root">
        <div hidden={userActive}>
          <p>Loading...</p>
          <p>Pleas login in Amazon connect</p>
          <button onClick={handleLogin}> Login </button>
          <button onClick={() => console.debug(userActive, renderCCP)}>
            {" "}
            User Active{" "}
          </button>
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
              CloseWindow={handleCloseWindow}
              setUserType={setUserType}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
