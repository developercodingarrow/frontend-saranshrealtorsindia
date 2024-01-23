import React, { useContext } from "react";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import {
  projectDetails,
  ProjectDetailsApi,
  ProjectStatus,
  ProjectUnitsType,
  ProjectPrices,
  ProjectLocation,
  projectfeature,
} from "../../../JsonData/formFileds";
import UpdateProject from "../../../Layouts/createProjectLayout/UpdateProject";
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";
export default function UpadteProjectPage() {
  const { handelUpadteProject } = useContext(ProjectContext);
  return (
    <DashboardLayout>
      <UpdateProject
        pageTitle="UPDATE PROJECT"
        projectDetailsFormFiled={projectDetails}
        ProjectDetailsApi={ProjectDetailsApi}
        ProjectStatusFiled={ProjectStatus}
        ProjectUnitsTypeFiled={ProjectUnitsType}
        ProjectPricesFiled={ProjectPrices}
        ProjectLocationFiled={ProjectLocation}
        projectfeatureFiled={projectfeature}
        handelProjectSubmit={handelUpadteProject}
      />
    </DashboardLayout>
  );
}
