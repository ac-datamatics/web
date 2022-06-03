import { useState } from "react";

export default function AuthFunction() {
  const [userActive, setUserActive] = useState(false);
  const [loginWindow, setLoginWindow] = useState();
  const [userType, setUserType] = useState("");
  return {
    userActive,
    userType,
    loginWindow,
    loging: async () => {
      localStorage.removeItem("connectPopupManager::connect::loginPopup");
      // Open login window
      // setLoginWindow(
      //   window.open(
      //     "https://ac-datamatics.my.connect.aws/ccp-v2",
      //     "window2",
      //     "popup, width=400, height=700"
      //   )
      // );
      console.debug(loginWindow);
    },
    CloseWindow: async () => {
      console.debug(loginWindow, "WINDOW");
      loginWindow?.close();
      setLoginWindow(null);
    },
    setUserActive: async () => {
      setUserActive(true);
    },
    setUserInactive: async () => {
      setUserActive(false);
    },
    setUserType: async (type) => {
      setUserType(type);
    },
  };
}
