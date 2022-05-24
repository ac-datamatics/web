import { useState } from "react";

export default function AuthFunction() {
  const [userActive, setUserActive] = useState(false);

  return {
    userActive,
    loging: async () => {
      localStorage.removeItem("connectPopupManager::connect::loginPopup");
      // Open login window
      this.__loginWindow = window.open(
        "https://ac-datamatics.my.connect.aws/ccp-v2",
        "window2",
        "popup=1"
      );
    },
    setUserActive: async () => {
      setUserActive(true);
    },
    
  };
}
