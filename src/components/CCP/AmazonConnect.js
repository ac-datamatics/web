import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";

import classes from "./AmazonConnect.module.css";

const AmazonConnect = (props) => {
  const { userActive, loginWindow, loging, CloseWindow, setUserActive, setUserInactive } = props;

  return (
    <div id={"ccp"} className={classes.ccpPosition}>
      {isBrowserCompatible() && (
        <CCP 
          instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
          userActive={userActive}
          loging={loging}
          setUserActive={setUserActive}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          setUserInactive={setUserInactive}
        />
      )}
    </div>
  );
};

export default AmazonConnect;
