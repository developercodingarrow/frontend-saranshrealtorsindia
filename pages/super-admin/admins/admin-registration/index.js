import React from "react";
import DashboardLayout from "../../../../Layouts/DashBoardLayout/DashboardLayout";
import AdminCreateLayOut from "../../../../Layouts/TwoColumLayout/AdminCreateLayOut";

export default function AdminRegisterPage() {
  return (
    <DashboardLayout>
      <AdminCreateLayOut pageForm="register" />
    </DashboardLayout>
  );
}
