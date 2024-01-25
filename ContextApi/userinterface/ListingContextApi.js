import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const ListingContext = createContext();

export default function ListingContextAppiProvide({ children }) {
  const [allListing, setallListing] = useState([]);

  return (
    <ListingContext.Provider value={{ allListing, setallListing }}>
      {children}
    </ListingContext.Provider>
  );
}
