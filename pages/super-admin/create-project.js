import React from "react";
import CreateProjectLayout from "../../Layouts/createProjectLayout/CreateProjectLayout";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import {
  projectDetails,
  ProjectDetailsApi,
  ProjectStatus,
  ProjectUnitsType,
  ProjectPrices,
  ProjectLocation,
  projectfeature,
} from "../../JsonData/formFileds";

export default function CreateProject() {
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
