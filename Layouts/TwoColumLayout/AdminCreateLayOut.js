import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./css/adminCreateLayout.module.css";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";
import TableWrapper from "../DashBoardLayout/TableWrapper";
import AdminCreateFormCard from "../../Utils/cards/AdminCreateFormCard";
import { SignUpInputs, otpVerifation } from "../../JsonData/authFormFiled";
export default function AdminCreateLayOut(props) {
  const { pageForm } = props;
  const router = useRouter();
  const [formType, setformType] = useState(pageForm);
  const [loading, setloading] = useState(false);

  const handelcreateAdmin = () => {
    router.push("/super-admin/admins/admin-otp-verification/3876r893759hfjdf");
  };

  const handelOtpverification = () => {
    setformType("register");
  };

  const renderForm = () => {
    switch (formType) {
      case "register":
        return (
          <AdminCreateFormCard
            formTitle="Register"
            customeInputs={SignUpInputs}
            formType="SINGUP"
            btntext="REGISTER"
            loading={loading}
            handelformSubmit={handelcreateAdmin}
          />
        );
      case "otp":
        return (
          <AdminCreateFormCard
            formTitle="OPT VERIFICATION"
            customeInputs={otpVerifation}
            formType="OTPVERIFIY"
            btntext="Verify OTP"
            loading={loading}
            handelformSubmit={handelOtpverification}
          />
        );
      case "complete":
        return <AdminCreateFormCard formTitle="Complete" />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.mainContainer}>
      <PageHeader pageTitle="Admins" />
      <div className={styles.componentWrapper}>
        <div className={styles.tablePart}>
          <div className={styles.card_wrapper}>
            <TableTitle tableTitle={"admins"} />
            <FillterBar data={[]} />
            <TableWrapper>
              <p>Dynimic table</p>
            </TableWrapper>
          </div>
        </div>
        <div className={styles.formPart}>{renderForm()}</div>
      </div>
    </div>
  );
}
