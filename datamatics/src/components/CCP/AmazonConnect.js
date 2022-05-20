import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";

import classes from "./AmazonConnect.module.css";

const AmazonConnect = () => {
  return (
    <div id={"ccp"} className={classes.ccpPosition}>
      {isBrowserCompatible() && (
        <CCP instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"} />
      )}
    </div>
  );
};

export default AmazonConnect;
