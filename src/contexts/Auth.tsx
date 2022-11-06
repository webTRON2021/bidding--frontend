import { useState, useEffect, createContext } from "react";

import AxiosInstance from "../api/index";
// interface for user
interface Props {
  children: React.ReactNode;
}

// context
export const AuthContext = createContext<any>(null);

// auth provider
export default ({ children }: Props) => {
  let userData;

  try {
    userData = JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error: any) {
    userData = {};
  }

  const [user, setUser] = useState<any>(userData);

  // for remember me login credential
  const [rememberMeData, setRememberMeData] = useState(
    JSON.parse(localStorage.getItem("rememberMe") || "{}")
  );

  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    rememberMe
      ? localStorage.setItem("rememberMe", JSON.stringify(rememberMeData))
      : localStorage.removeItem("rememberMe");
    localStorage.setItem("user", JSON.stringify(user));
  }, [user, rememberMeData, rememberMe]);

  //* function to login
  const login = async (data:FormData) => {
    try {
      const res = await AxiosInstance.post("/client/auth/login", data);
      setUser(user);
      return {
        success: true,
        message: res.data.message,
      };
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response.data
          ? error.response.data.message
          : error.message,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        setUser,
        rememberMe,
        setRememberMe,
        rememberMeData,
        setRememberMeData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
