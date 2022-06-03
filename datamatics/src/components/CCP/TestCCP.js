import "amazon-connect-streams";
import React, { useRef, useEffect, useState } from "react";

const ConnectCCP = (props) => {
  const ref = useRef();

  const [initialized, setInitialized] = useState(false);
  const [agent, setAgent] = useState(null);

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
      ccpLoadTimeout: 500, //optional, defaults to 5000 (ms)
      // LOGIN
      loginPopup: !props.userActive, // Show a popup window to authenticate
      loginPopupAutoClose: true, // Auto close login popup after auth
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
        setInitialized(false);
        props.setUserInactive();
        // Callback
        //   props.onInstanceTerminated?.();
      });

    // On connected to ccp
    window.connect.core
      .getEventBus()
      .subscribe(window.connect.EventType.UPDATE_CONNECTED_CCPS, () => {
        setInitialized(true);
        // Close login window
        props.setUserActive();
        console.debug("BEFORE CLOSING WINDOW");
        props.CloseWindow();
        // Callback
        //   this.props.onInstanceConnected?.();
        // Listen to agents
        window.connect.agent((agent) => {
          // Store agent
          setAgent(agent);
          console.debug(agent.getName());
          // Callback
          // props.onAgent?.(agent);
          // Listen to agent changes
          agent.onStateChange((state) => {
            // Avoid duplicate events
            if (state.newState == state.oldState) return;
            // Callback
            //   props.onAgentStateChange?.(state);
          });
        });
        // Listen to contacts
        window.connect.contact((contact) => {
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
              case window.connect.ContactStateType.CONNECTING:
                return props.onIncomingContact?.(contact);
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
            alert(previousState);
          });
          contact.onDestroy(() => {
            if (previousState == "destroy") return;
            previousState = "destroy";
            props.onDestroyContact?.(contact);
            alert(previousState);
          });
        });
      });

    console.log("init end");
  }, []);

  console.log("render");
  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100%", minHeight: 480, minWidth: 400 }}
      // style={{ minWidth: 400, minHeight: 480 }}
    />
  );
};

export default ConnectCCP;
