import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const ListingContext = createContext();

export default function ListingContextAppiProvide({ children }) {
  const [loadingProject, setloadingProject] = useState(true);
  const [allListing, setallListing] = useState([]);

  return (
    <ListingContext.Provider
      value={{ allListing, setallListing, loadingProject, setloadingProject }}
    >
      {children}
    </ListingContext.Provider>
  );
}
