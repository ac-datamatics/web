import isBrowserCompatible from "./compatibility";
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

  const { removeScreen, getScreen, start, stop } = RecordingFunctions();
  const ccp = React.createRef();

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
          userType={userType}
          setUserType={setUserType}
          loging={loging}
          setUserActive={setUserActive}
          setUserInactive={setUserInactive}
          loginWindow={loginWindow}
          CloseWindow={CloseWindow}
          instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"}
          ref={ccp}
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
            console.debug(state.newState);
          }}
          onIncomingContact={async (contact) => {
            // Called when there is an incoming contact (eg, the phone is ringing)
            console.debug("i am incoming");
            await getScreen(true);
          }}
          onConnectedContact={(contact) => {
            // Called when the contact is connected (the call has started)
            start(contact);
            console.debug("hello there");
          }}
          onDestroyContact={async (contact) => {
            // Called after acw, when the agent closes the communication with the contact
            // Stop recording
            let heyBlob = await stop();

            // Here, the stored recording should be uploaded to S3
            // Storage.put(`${contact.getContactId()}.webm`, heyBlob, {
            //   level: "public",
            //   contentType: "video/webm",
            //   progressCallback: (progress) => {
            //     console.log(progress);
            //   },
            // });

            // Here, a lambda must be called to insert the recording's data into the database
            const data = {
              agentId: ccp.current.agent.getConfiguration().username,
              // callStartUTCDate: contact.getQueueTimestamp().toISOString(),
              contactId: contact.getContactId(),
              queueId: contact.getQueue().queueId,
            };
          }}
        />
      )}
    </>
  );
};

export default AmazonConnect;
