import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { createNewCity, allCity } from "../Actions/cityAction";
export const CityContext = createContext();

export default function CityContextAppiProvide({ children }) {
  const [allCites, setallCites] = useState([]);

  useEffect(() => {
    handelAllCites();
  }, []);

  const handelAllCites = async () => {
    try {
      const res = await allCity();
      setallCites(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allCites);

  return (
    <CityContext.Provider value={{ allCites, setallCites }}>
      {children}
    </CityContext.Provider>
  );
}
