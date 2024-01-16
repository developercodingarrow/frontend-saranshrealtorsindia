import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const ProjectContext = createContext();
import { createNewProject, getProjectByID } from "../Actions/projectActions";

import {
  genericDataHandler,
  genericGetByIDHandler,
} from "../Utils/generichandler/generichandler";

export default function ProjectContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handelnewProject = genericDataHandler(createNewProject);
  // const handelGetProjectByID = genericGetByIDHandler(getProjectByID);

  const handelGetProject = async (id) => {
    try {
      setloading(true);
      const res = await getProjectByID(id);
      const project = res.data.result;

      if (res.data.status === "success") {
        setloading(false);
        // Now you can set the project data state
        const unitsData = project.typesofUnits.map((unit) => unit);

        setProjectData({
          projectTitle: project.projectTitle || "",
          possession: project.possession || "",
          basicPrice: project.basicPrice || "",
          builder: project.builder || "",
          city: project.city || "",
          unitsNo: project.unitsNo || 0,
          typesofUnits: unitsData,
          projectStatus: project.projectStatus || "",
          price: project.price || "",
          pricePrefix: project.pricePrefix || "",
          city: project.city || "",
          projectLocation: project.projectLocation || "",
          builder: project.builder || "",
          reraNo: project.reraNo || "",
          floors: project.floors || "",
          projectArea: project.projectArea || "",
          basicPrice: project.basicPrice || "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        loading,
        setloading,
        handelnewProject,
        handelGetProject,
        projectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
