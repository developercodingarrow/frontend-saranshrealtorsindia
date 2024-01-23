import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";
import ProjectList from "../../../Layouts/createProjectLayout/ProjectList";
import { projectDataColoum } from "../../../JsonData/TableData";
import TwoCloumTableForm from "../../../Layouts/TwoColumLayout/TwoCloumTableForm";

export default function ProjectsList() {
  const { handelAllProjects, allProject } = useContext(ProjectContext);
  const router = useRouter();
  const { handelnewProject } = useContext(ProjectContext);

  useEffect(() => {
    handelAllProjects();
  }, []);

  console.log(allProject);

  return (
    <DashboardLayout>
      {/* <ProjectList tableData={allProject} tableColumn={projectDataColoum} /> */}
      <TwoCloumTableForm
        pageTitle="Product"
        tableTitle="Product List"
        tableData={allProject}
        tableColumn={projectDataColoum}
        sideForm={false}
        folderPath="project-thumblin"
      />
    </DashboardLayout>
  );
}
