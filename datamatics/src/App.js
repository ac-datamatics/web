import Sidebar from "./components/ResponsiveDrawer";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Tabs/Home/Home";
import Leaderboard from "./components/Tabs/Leaderboard";
import Training from "./components/Tabs/Training/Training";
import ScreenRecording from "./components/Tabs/ScreenRecording";
import AmazonConnect from "./components/CCP/AmazonConnect";
import "./App.css";
import React from "react";

function App(props) {
  const { userActive, loging, setUserActive } = props.AuthFunction();

  if (!userActive) {
    loging();
  }

  return (
    <div className="root">
      <div hidden={userActive}>Loading....</div>

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
      <div className="amazonConnectContainer" hidden={!userActive}>
        <AmazonConnect
          setUserActive={setUserActive}
          userActive={userActive}
          loging={loging}
        />
      </div>
    </div>
  );
}

export default App;
