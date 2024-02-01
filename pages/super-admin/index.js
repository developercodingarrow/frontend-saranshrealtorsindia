import React from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import { CreatecitysFileds, CityDetailsApi } from "../../JsonData/formFileds";
import {
  cityDataColoum,
  CitysampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";
import AdminAuth from "../../private/AdminAuth";

export default function SuperAdminDashBoardPage() {
  return (
    <AdminAuth> 
    <DashboardLayout>
      <p>Table</p>
    </DashboardLayout>
    </AdminAuth>
  );
}
