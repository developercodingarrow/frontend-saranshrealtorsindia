import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { newgenericDataHandler } from "../Utils/generichandler/generichandler";
import { createNewEnquirey } from "../Actions/enquireyAction";

export const EnquireyContext = createContext();

export default function EnquireyContextAppiProvide({ children }) {
  const [toggleAction, settoggleAction] = useState(false);

  const handelnewEnquirey = newgenericDataHandler(
    createNewEnquirey,
    settoggleAction,
    toggleAction
  );

  return (
    <EnquireyContext.Provider
      value={{
        handelnewEnquirey,
        toggleAction,
      }}
    >
      {children}
    </EnquireyContext.Provider>
  );
}
