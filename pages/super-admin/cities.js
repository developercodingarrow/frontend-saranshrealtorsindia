import React from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import { CreatecitysFileds, CityDetailsApi } from "../../JsonData/formFileds";
import {
  cityDataColoum,
  CitysampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";

export default function CitiesPage() {
  return (
    <DashboardLayout>
      <TwoCloumTableForm
        pageTitle="City Page"
        tableTitle="City List"
        formTitle="CREATE CITY"
        formFields={CreatecitysFileds}
        apiData={CityDetailsApi}
        forAction="submit"
        tableColumn={cityDataColoum}
        tableData={CitysampleData}
        SuperAdminColum={SuperAdminColum}
      >
        <p>Table</p>
      </TwoCloumTableForm>
    </DashboardLayout>
  );
}
