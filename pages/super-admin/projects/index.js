import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";
import { AppContext } from "../../../ContextApi/AppContextApi";
import ProjectList from "../../../Layouts/createProjectLayout/ProjectList";
import {
  projectDataColoum,
  SuperAdminColum,
} from "../../../JsonData/TableData";
import TwoCloumTableForm from "../../../Layouts/TwoColumLayout/TwoCloumTableForm";
import LoadingPagWrapper from "../../../Utils/Elements/Loading/LoadingPagWrapper";

export default function ProjectsList() {
  const { modelPassData, setmodelPassData, isModalOpen, setIsModalOpen } =
    useContext(AppContext);
  const router = useRouter();
  const {
    handelAllProjects,
    allProject,
    handelnewProject,
    handelView,
    handelEdit,
    handelDeleteProject,
    loading,
  } = useContext(ProjectContext);

  useEffect(() => {
    handelAllProjects();
  }, [isModalOpen]);

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
        SuperAdminColum={SuperAdminColum}
        sideForm={false}
        createNewBtn="Create New Project"
        createNew={handelCreateNew}
        viewAction={handelView}
        editAction={handelEdit}
        modelYesAct={handelDeleteProject}
        folderPath="project-thumblin"
        loading={loading}
      />
    </DashboardLayout>
  );
}
