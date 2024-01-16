import React, { useContext } from "react";
import { useRouter } from "next/router";
import CreateProjectLayout from "../../../Layouts/createProjectLayout/CreateProjectLayout";
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
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";

export default function CreateProject() {
  const router = useRouter();
  const { handelnewProject } = useContext(ProjectContext);
  const handelfomSubmit = async (data) => {
    try {
      const res = await handelnewProject(data);
      console.log(res.data);
      router.push(`/super-admin/projects/${res.data.result._id}`);
      // result._id
    } catch (error) {
      console.log(error);
    }
  };
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
        handelProjectSubmit={handelfomSubmit}
      />
    </DashboardLayout>
  );
}
