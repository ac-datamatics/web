import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";

import classes from "./AmazonConnect.module.css";

const AmazonConnect = (props) => {
  const { userActive, loginWindow, loging, CloseWindow, setUserActive, setUserInactive, setGlobalTypeUser } = props;

  return (
    <div id={"ccp"} className={classes.ccpPosition}>
      {isBrowserCompatible() && (
        <CCP
          userActive={userActive}
          loging={loging}
          setUserActive={setUserActive}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          setUserInactive={setUserInactive}
          setGlobalTypeUser={setGlobalTypeUser}
          instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
        />
      )}
    </div>
  );
};

export default AmazonConnect;
