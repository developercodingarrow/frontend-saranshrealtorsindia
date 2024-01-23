import React from "react";
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

export default function DeveloperPage() {
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
        tableData={developersampleData}
        SuperAdminColum={SuperAdminColum}
        sideForm={true}
      >
        <p>Table</p>
      </TwoCloumTableForm>
    </DashboardLayout>
  );
}
