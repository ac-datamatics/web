import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";
import TestCCP from "./TestCCP";

import classes from "./AmazonConnect.module.css";

const AmazonConnect = (props) => {
  const {
    userActive,
    userType,
    loginWindow,
    loging,
    CloseWindow,
    setUserActive,
    setUserInactive,
    setUserType,
  } = props;
  return (
    <div id={"ccp"} className={classes.ccpPosition}>
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
          userActive={userActive}
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
    </div>
  );
};

export default AmazonConnect;
