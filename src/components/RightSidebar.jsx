import React from "react";
import styled from "styled-components";
import ActiveListeners from "./ActiveListeners";
import Avatar from "./Avatar";
import Player from "./Player";
import AmazonConnect from "./CCP/AmazonConnect";

function RightSidebar(props) {
  const { userActive, loginWindow, loging, CloseWindow, setUserActive, setUserInactive, setGlobalTypeUser } = props;

  return (
    <Section id="rightSidebar">
      <div className="amazonConnectContainer">
        <AmazonConnect
          userActive={userActive}
          loging={loging}
          setUserActive={setUserActive}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          setUserInactive={setUserInactive}
          setGlobalTypeUser={setGlobalTypeUser}
        />
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--dark-background-color);
  padding: 1rem;


`;
export default RightSidebar;
