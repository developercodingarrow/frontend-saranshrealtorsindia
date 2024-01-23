import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";
import { AppContext } from "../../../ContextApi/AppContextApi";
import ProjectList from "../../../Layouts/createProjectLayout/ProjectList";
import { projectDataColoum } from "../../../JsonData/TableData";
import TwoCloumTableForm from "../../../Layouts/TwoColumLayout/TwoCloumTableForm";

export default function ProjectsList() {
  const router = useRouter();
  const {
    handelAllProjects,
    allProject,
    handelnewProject,
    handelView,
    handelEdit,
    handelDeleteProject,
  } = useContext(ProjectContext);

  useEffect(() => {
    handelAllProjects();
  }, []);

  console.log(allProject);

  const handelCreateNew = async () => {
    try {
      const res = await handelnewProject({});
      console.log(res);
      if (res.data.status === "success") {
        router.push(`/super-admin/projects/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <TwoCloumTableForm
        pageTitle="Product"
        tableTitle="Product List"
        tableData={allProject}
        tableColumn={projectDataColoum}
        sideForm={false}
        createNewBtn="Create New Project"
        createNew={handelCreateNew}
        viewAction={handelView}
        editAction={handelEdit}
        modelYesAct={handelDeleteProject}
        folderPath="project-thumblin"
      />
    </DashboardLayout>
  );
}
