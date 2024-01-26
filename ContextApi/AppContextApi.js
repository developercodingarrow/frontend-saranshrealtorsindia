import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const AppContext = createContext();

export default function AppContextAppiProvide({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelPassData, setmodelPassData] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAppDrawer, setshowAppDrawer] = useState(true);

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setmodelPassData(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleAppDrawer = () => {
    setshowAppDrawer(!showAppDrawer);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        handleOpenModal,
        handleCloseModal,
        modelPassData,
        setmodelPassData,
        showSideBar,
        setShowSideBar,
        showAppDrawer,
        setshowAppDrawer,
        toggleSideBar,
        toggleAppDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
