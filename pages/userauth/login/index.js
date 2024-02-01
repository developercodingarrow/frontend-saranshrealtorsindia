import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { loginInputs } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";
import { isAuth } from "../../../Actions/authAction";

export default function LoginPage() {
  const { handelLogin } = useContext(AuthContext);
  console.log(isAuth());
  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"Login"}
          btntext="LOGIN"
          formType="LOGIN"
          formdescreption="Log In for Exclusive Features!"
          customInputs={loginInputs}
          handleFormSubmit={handelLogin}
        />
      </AuthLayout>
    </>
  );
}
