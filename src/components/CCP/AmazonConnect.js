import isBrowserCompatible from "./compatibility";
import CCP from "./CCP";

import classes from "./AmazonConnect.module.css";
import RecordingFunctions from "../../functions/RecordingFunctions";

import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from '../../aws-exports';

// Amplify.configure(awsconfig);

const   AmazonConnect = (props) => {
  const {
    agent,
    userActive,
    userType,
    loginWindow,
    CloseWindow,
    setUserActive,
    setUserInactive,
    setUserType,
  } = props;

  const { removeScreen, getScreen, start, stop } = RecordingFunctions();

  return (
    <>
      {isBrowserCompatible() && (
        <div id={"ccp"} className={classes.ccpPosition}>
          {isBrowserCompatible() && (
            <CCP
              agent={agent}
              userActive={userActive}
              userType={userType}
              setUserType={setUserType}
              setUserActive={setUserActive}
              setUserInactive={setUserInactive}
              loginWindow={loginWindow}
              CloseWindow={CloseWindow}
              instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
              onInstanceTerminated={async () => {
                // Called on instance termination, when an agent logs out
                removeScreen();
              }}
              onAgent={async (agent) => {
                // Called after initialization, when an agent is assigned to the ccp
                //let type = ccp.current.getAgentType();
                agent.setState(agent.getAgentStates()[1], {
                  success: () => {
                    console.debug("changed");
                  },
                  failure: (err) => {
                    console.debug("not changed");
                  },
                });
              }}
              onAgentStateChange={async (state) => {
                // Called when the agent's state changes (ie, they are online/offline, in a call or on acw)
                // When agent gets online
                if (
                  state?.newState === "Available" &&
                  state?.oldState === "Offline"
                ) {
                  await getScreen();
                } else if (state?.newState === "Offline") {
                  removeScreen();
                }
              }}
              onIncomingContact={async (contact) => {
                // Called when there is an incoming contact (eg, the phone is ringing)
                await getScreen(true);
              }}
              onConnectedContact={(contact) => {
                // Called when the contact is connected (the call has started)
                start(contact);
              }}
              onDestroyContact={async (contact) => {
                // Called after acw, when the agent closes the communication with the contact
                // Stop recording
                let heyBlob = await stop();

                // Here, the stored recording should be uploaded to S3
                Storage.put(`recordings/${contact.getContactId()}.webm`, heyBlob, {
                  level: "public",
                  contentType: "video/webm",
                  progressCallback: (progress) => {
                    console.log(progress);
                  },
                });
                alert("uploaded")
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AmazonConnect;
