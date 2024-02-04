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
import DashBoardStatsLayout from "../../Layouts/TwoColumLayout/DashBoardStatsLayout";

export default function SuperAdminDashBoardPage() {
  return (
    <AdminAuth>
      <DashboardLayout>
        <DashBoardStatsLayout />
      </DashboardLayout>
    </AdminAuth>
  );
}
