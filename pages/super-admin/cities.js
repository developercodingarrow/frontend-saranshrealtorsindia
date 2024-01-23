import React, { useContext } from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import { CreatecitysFileds, CityDetailsApi } from "../../JsonData/formFileds";
import {
  cityDataColoum,
  CitysampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";
import { CityContext } from "../../ContextApi/CityContextApi";

export default function CitiesPage() {
  const { allCites } = useContext(CityContext);
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
        tableData={allCites}
        SuperAdminColum={SuperAdminColum}
        sideForm={true}
      />
    </DashboardLayout>
  );
}
