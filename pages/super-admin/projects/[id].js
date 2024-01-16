import React from "react";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import CreateProjectLayout from "../../../Layouts/createProjectLayout/CreateProjectLayout";
import {
  projectDetails,
  ProjectDetailsApi,
  ProjectStatus,
  ProjectUnitsType,
  ProjectPrices,
  ProjectLocation,
  projectfeature,
} from "../../../JsonData/formFileds";
export default function UpadteProjectPage() {
  return (
    <DashboardLayout>
      <CreateProjectLayout
        pageTitle="CREATE PROJECT"
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
