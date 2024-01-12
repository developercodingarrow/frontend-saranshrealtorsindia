import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const AuthContext = createContext();
import { createNewUser, verifyOtp, loginAccount } from "../Actions/authAction";

export default function AuthContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);

  const handelCreateNewUser = async (data) => {
    try {
      const response = await createNewUser(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelverifyOtp = async (data, UrlToken) => {
    try {
      console.log(data);
      const response = await verifyOtp(data, UrlToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelLogin = async (data) => {
    try {
      console.log(data);
      const response = await loginAccount(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handelCreateNewUser,
        handelverifyOtp,
        handelLogin,
        loading,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
