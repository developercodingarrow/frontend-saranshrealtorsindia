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
  const [projectCoverImages, setProjectCoverImages] = useState([]);

  const handelnewProject = genericDataHandler(createNewProject);
  // const handelGetProjectByID = genericGetByIDHandler(getProjectByID);

  const handelGetProject = async (id) => {
    try {
      setloading(true);
      const res = await getProjectByID(id);
      const project = res.data.result;

      if (res.data.status === "success") {
        setloading(false);
        console.log(project);
        // Now you can set the project data state
        const unitsData = project.typesofUnits.map((unit) => unit);
        // Extract ProjectCoverImage data
        const projectCoverImagesData = project.ProjectCoverImage || [];

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

        // Set the ProjectCoverImage data state
        setProjectCoverImages(projectCoverImagesData);
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
        projectCoverImages,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
