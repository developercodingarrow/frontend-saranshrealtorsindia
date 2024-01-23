import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { createNewBuilder, allBuilder } from "../Actions/builderAction";
export const BuilderContext = createContext();

export default function BuilderContextAppiProvide({ children }) {
  const [allBuilders, setallBuilders] = useState([]);

  useEffect(() => {
    handelAllBuilder();
  }, []);

  const handelAllBuilder = async () => {
    try {
      const res = await allBuilder();
      setallBuilders(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BuilderContext.Provider value={{ allBuilders, setallBuilders }}>
      {children}
    </BuilderContext.Provider>
  );
}
