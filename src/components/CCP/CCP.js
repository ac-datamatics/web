import "amazon-connect-streams";
import { useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";

import classes from "./AmazonConnect.module.css";

const ConnectCCP = (props) => {
  const initialized = useRef(false);
  const agent = useRef(null);

  const ref = useRef();

  const getAgentType = () => {
    try {
      const permissions = agent.current.getPermissions();
      if (permissions.length === 1) return "Agent";
      return "Admin";
    } catch (e) {
      console.debug(e.message);
      return "CallCenterManager";
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") throw new Error("window missing");
    if (typeof window.connect === "undefined")
      throw new Error("global connect missing");
    console.log("init start");
    console.debug(props.userActive);
    window.connect.core.initCCP(ref.current, {
      // CONNECT CONFIG
      ccpUrl: props.instanceURL, // Required
      region: "us-east-1", // Region of the instance
      ccpAckTimeout: 3000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 1000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 1000, //optional, defaults to 5000 (ms)
      // LOGIN
      loginPopup: false, // Show a popup window to authenticate
      loginPopupAutoClose: false, // Auto close login popup after auth
      loginOptions: {
        autoClose: true,
        height: 400,
        width: 400,
        top: 0,
        left: 0,
      },
      // PHONE OPTIONS
      softphone: {
        allowFramedSoftphone: true, // optional, defaults to false
        disableRingtone: false, // optional, defaults to false
        ringtoneUrl: false, // optional, defaults to CCP’s default ringtone if a falsy value is set
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: false, //optional, defaults to 'false'
        enablePhoneTypeSettings: false, //optional, defaults to 'true'
      },
    });

    window.connect.core
      .getEventBus()
      .subscribe(window.connect.EventType.TERMINATED, () => {
        if (!initialized.current) return;
        initialized.current = false;
        agent.current = null;
        props.setUserInactive();
        window.location.reload(true);
        // Callback
        props.onInstanceTerminated?.();
      });

    // On connected to ccp
    window.connect.core
      .getEventBus()
      .subscribe(window.connect.EventType.UPDATE_CONNECTED_CCPS, () => {
        if (initialized.current) return;
        initialized.current = true;
        // Close login window
        props.setUserActive();

        // console.debug("BEFORE CLOSING WINDOW");
        props.CloseWindow();
        // Callback
        //   this.props.onInstanceConnected?.();
        // Listen to agents
        window.connect.agent((_agent) => {
          // Store agent
          agent.current = _agent;
          props.setAgent(agent.current.getConfiguration());
          console.debug(props.agent);
          console.debug(agent.current.getConfiguration());
          // Callback
          props.onAgent?.(agent.current);
          props.setUserType(getAgentType());
          // Listen to agent changes
          agent.current.onStateChange((state) => {
            // Avoid duplicate events
            if (state.newState == state.oldState) return;
            // Callback
            props.onAgentStateChange?.(state);
          });
        });
        // Listen to contacts
        window.connect.contact((contact) => {
          if (contact.getType() !== window.connect.ContactType.VOICE) return;
          // Callback
          // props.onContact?.(contact);
          // Store previous state
          let previousState = contact.getState().type;
          // Listen to contact changes
          contact.onRefresh((contact) => {
            if (contact.getState().type === previousState) return;
            previousState = contact.getState().type;
            switch (previousState) {
              case window.connect.ContactStateType.INCOMING:
                return props.onIncomingContact?.(contact);
              case window.connect.ContactStateType.CONNECTING:
              case window.connect.ContactStateType.PENDING:
                return props.onPendingContact?.(contact);
              case window.connect.ContactStateType.MISSED:
                return props.onMissedContact?.(contact);
              case window.connect.ContactStateType.CONNECTED:
                return props.onConnectedContact?.(contact);
              case window.connect.ContactStateType.ENDED:
                return props.onEndedContact?.(contact);
              case window.connect.ContactStateType.ERROR:
                return props.onErrorContact?.(contact);
              case window.connect.ContactStateType.REJECTED:
                return props.onRejectedContact?.(contact);
            }
          });
          // Listen to contact events
          contact.onACW(() => {
            if (previousState == "after-call-work") return;
            previousState = "after-call-work";
            props.onAfterCallWork?.();
          });
          contact.onDestroy(() => {
            if (previousState == "destroy") return;
            previousState = "destroy";
            props.onDestroyContact?.(contact);
          });
        });
      });

    console.log("init end");
  }, []);

  console.log("render");
  return (
    <div
      ref={ref}
      // style={{ width: "100%", height: "100%", minHeight: 480, minWidth: 400 }}
      // style={{ minWidth: 400, minHeight: 480 }}
      className={classes.ccpPosition}
    >
      {props.userActive ? <Redirect to="/home" /> : <Redirect to="/" />}
    </div>
  );
};

export default ConnectCCP;
