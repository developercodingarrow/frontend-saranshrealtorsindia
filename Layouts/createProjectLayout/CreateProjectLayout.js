import React from "react";
import styles from "./css/createPtojectLayout.module.css";
import FormCard from "../../Utils/cards/FormCard";

export default function CreateProjectLayout(props) {
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    ProjectStatusFiled,
    ProjectUnitsTypeFiled,
    ProjectPricesFiled,
    ProjectLocationFiled,
    projectfeatureFiled,
  } = props;

  const handelfomSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>

        <div className={styles.componentWarper}>
          <div className={styles.left_Side}>
            <FormCard
              title="Project Details"
              customeInputs={projectDetailsFormFiled}
              apiData={ProjectDetailsApi}
              actionType="submit"
              handelfomSubmit={handelfomSubmit}
            />
          </div>
          <div className={styles.right_Side}></div>
        </div>
      </div>
    </>
  );
}
