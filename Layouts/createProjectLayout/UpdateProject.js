import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./css/createPtojectLayout.module.css";
import FormCard from "../../Utils/cards/FormCard";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";

export default function UpdateProject(props) {
  const router = useRouter();
  const { id } = router.query;
  const { loading, handelGetProject, projectData } = useContext(ProjectContext);
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    ProjectStatusFiled,
    ProjectUnitsTypeFiled,
    ProjectPricesFiled,
    ProjectLocationFiled,
    projectfeatureFiled,
    handelProjectSubmit,
  } = props;

  useEffect(() => {
    handelGetProject(id);
  }, [id]);

  console.log("Project Data:", projectData);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>
        {!loading && Object.keys(projectData).length > 0 && (
          <div className={styles.componentWarper}>
            <div className={styles.left_Side}>
              <FormCard
                title="Project Details"
                customeInputs={projectDetailsFormFiled}
                apiData={projectData}
                actionType="submit"
                handelfomSubmit={handelProjectSubmit}
              />
            </div>
            <div className={styles.right_Side}></div>
          </div>
        )}
      </div>
    </>
  );
}
