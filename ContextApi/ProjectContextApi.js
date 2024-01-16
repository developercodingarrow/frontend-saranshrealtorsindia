import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const ProjectContext = createContext();
import { createNewProject } from "../Actions/projectActions";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
} from "../Utils/generichandler/generichandler";

export default function ProjectContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);

  const handelnewProject = genericDataHandler(createNewProject);

  return (
    <ProjectContext.Provider
      value={{
        setloading,
        handelnewProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
