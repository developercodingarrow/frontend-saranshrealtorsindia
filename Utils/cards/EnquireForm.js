import React from "react";
import styles from "./css/enquireyForm.module.css";
import { enquireyFormFiled, dummyapi } from "../../JsonData/formFileds";
import { useCustomForm } from "../../custome-hooks/useCustomForm";
import SubmitBtn from "../Elements/buttonsElements/SubmitBtn";
export default function EnquireForm() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomForm(dummyapi);
  return (
    <div className={styles.main_container}>
      <div className={styles.form_heading}>
        <p>Enquirey Now</p>
      </div>
      <form>
        <div>{enquireyFormFiled.map((input) => renderInput(input))}</div>

        <div>
          <SubmitBtn
            text="submit"
            buttonstyle="fullWidthBtn"
            btnColor="primaryBtnColor"
            btnSze="fullWidthBtnSize"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
}
