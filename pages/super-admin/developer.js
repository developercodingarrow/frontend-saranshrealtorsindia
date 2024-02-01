import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import {
  CreateDeveloeprFileds,
  DeveloperDetailsApi,
} from "../../JsonData/formFileds";
import {
  developerDataColoum,
  developersampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";
import { BuilderContext } from "../../ContextApi/BuilderContextApi";

export default function DeveloperPage() {
  const {
    allBuilders,
    handelAllBuilder,
    handelDeleteBuilder,
    toggleAction,
    settoggleAction,
    handelnewBuilder,
  } = useContext(BuilderContext);

  useEffect(() => {
    handelAllBuilder();
  }, [toggleAction]);
  return (
    <DashboardLayout>
      <TwoCloumTableForm
        pageTitle="DEVELOPER Page"
        tableTitle="DEVELOPER List"
        formTitle="CREATE DEVELOPER"
        formFields={CreateDeveloeprFileds}
        apiData={DeveloperDetailsApi}
        forAction="submit"
        tableColumn={developerDataColoum}
        tableData={allBuilders}
        SuperAdminColum={SuperAdminColum}
        sideForm={true}
        modelYesAct={handelDeleteBuilder}
        handelcreateNew={handelnewBuilder}
      >
        <p>Table</p>
      </TwoCloumTableForm>
    </DashboardLayout>
  );
}
