import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";
import TestCCP from "./TestCCP";

const AmazonConnect = (props) => {
  const {
    agentUsername,
    userActive,
    userType,
    loginWindow,
    loging,
    CloseWindow,
    setUserActive,
    setUserInactive,
    setUserType,
  } = props;

  const onIncomingContact = () => {
    alert("INCOMING CONTACT");
  };

  return (
    <>
      {isBrowserCompatible() && (
        // <CCP
        //   userActive={userActive}
        //   loging={loging}
        //   setUserActive={setUserActive}
        //   loginWindow={loginWindow}
        //   CloseWindow={CloseWindow}
        //   instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
        // />
        <TestCCP
          agentUsername={agentUsername}
          userActive={userActive}
          onIncomingContact={onIncomingContact}
          userType={userType}
          setUserType={setUserType}
          loging={loging}
          setUserActive={setUserActive}
          setUserInactive={setUserInactive}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
        />
      )}
    </>
  );
};

export default AmazonConnect;
