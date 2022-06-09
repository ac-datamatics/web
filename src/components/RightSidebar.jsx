import React from "react";
import styled from "styled-components";
import AmazonConnect from "./CCP/AmazonConnect";

function RightSidebar(props) {
  const { agentUsername,
    userActive,
    userType,
    loginWindow,
    CloseWindow,
    setUserActive,
    setUserInactive,
    setUserType } = props;

  return (
    <Section id="rightSidebar">
      <div className="amazonConnectContainer">
        <AmazonConnect
          agentUsername={agentUsername}
          setUserActive={setUserActive}
          setUserInactive={setUserInactive}
          userActive={userActive}
          userType={userType}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          setUserType={setUserType}
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
