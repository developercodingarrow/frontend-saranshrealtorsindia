import React from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";

export default function SuperAdminDashBoardPage() {
  return (
    <DashboardLayout>
      <TwoCloumTableForm>
        <p>Table</p>
      </TwoCloumTableForm>
    </DashboardLayout>
  );
}
