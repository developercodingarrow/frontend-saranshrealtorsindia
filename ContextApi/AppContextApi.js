import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const AppContext = createContext();

export default function AppContextAppiProvide({ children }) {
  const [visibalRows, setvisibalRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelPassData, setmodelPassData] = useState("");

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setmodelPassData(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
