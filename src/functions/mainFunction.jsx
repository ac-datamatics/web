import { useState } from "react";

export default function AuthFunction() {
  const [userActive, setUserActive] = useState(false);
  const [loginWindow, setLoginWindow] = useState(undefined);
  const [userType, setUserType] = useState("");
  return {
    userActive,
    loginWindow,
    userType,
    loging: async () => {
      localStorage.removeItem("connectPopupManager::connect::loginPopup");
      // Open login window
      const __loginWindow = window.open(
        "https://ac-datamatics.my.connect.aws/ccp-v2",
        "window2",
        "popup=1"
      );
      setLoginWindow(__loginWindow);
    },
    CloseWindow: async () => {
      loginWindow?.close()
      setLoginWindow(undefined)
    },
    setUserActive: async () => {
      setUserActive(true);
    },
    setUserInactive: async () => {
      setUserActive(false);
    },
    setGlobalTypeUser: async (user) => {
      setUserType(user);
    }
  };
}
