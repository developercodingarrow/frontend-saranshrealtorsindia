import React from "react";
import DashboardLayout from "../../../../Layouts/DashBoardLayout/DashboardLayout";
import AdminCreateLayOut from "../../../../Layouts/TwoColumLayout/AdminCreateLayOut";

export default function AdminOTPVerification() {
  return (
    <DashboardLayout>
      <AdminCreateLayOut pageForm="otp" />
    </DashboardLayout>
  );
}
