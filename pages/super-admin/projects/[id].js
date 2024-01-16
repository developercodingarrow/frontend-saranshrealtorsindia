import React from "react";
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

export default function UpadteProjectPage() {
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
      />
    </DashboardLayout>
  );
}
