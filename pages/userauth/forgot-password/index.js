import React from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { forgotePasswordInputs } from "../../../JsonData/authFormFiled";

export default function ForgotpasswordPage() {
  const onFormSubmit = (data, handleForm) => {
    // Your default submission action
    alert(JSON.stringify(data));
  };
  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"Forgote Password"}
          btntext="Send Email"
          formType="Forgotpassword"
          formdescreption="Enter you E-mail for Re-sent Your Password"
          customInputs={forgotePasswordInputs}
          handleFormSubmit={onFormSubmit}
        />
      </AuthLayout>
    </>
  );
}
