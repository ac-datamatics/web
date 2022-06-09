import { useState } from "react";

export default function AuthFunction() {
  const [userActive, setUserActive] = useState(false);
  const [loginWindow, setLoginWindow] = useState(undefined);
  const [userType, setUserType] = useState("");
  return {
    userActive,
    loginWindow,
    userType,
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
