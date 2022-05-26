import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import RightSidebar from "components/RightSidebar";
import Dashboard from "components/Dashboard";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Training from "./components/Training/Training";
import LogIn from "./components/Login/Login";
export default function App(props) {
  const { userActive, loginWindow, loging, CloseWindow, setUserActive, setUserInactive } = props.AuthFunction();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);
  return (
    <div>
      <div id="logIn">
        <LogIn 
          loging={loging}
        />
      </div>
      <div id="mainPage" hidden={true}>
        <Router>
          <Sidebar />
          <View>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/leaderboard">
                <Dashboard />
              </Route>
              <Route path="/training">
                <Training />
              </Route>
            </Switch>
          </View>
          <RightSidebar 
            userActive={userActive}
            loging={loging}
            setUserActive={setUserActive}
            loginWindow={loginWindow}
            CloseWindow={CloseWindow}
            setUserInactive={setUserInactive}
          />
        </Router>
      </div >
    </div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

const View = styled.div`
width: 100%;
height: 100vh;
overflow-y: auto;
`;
