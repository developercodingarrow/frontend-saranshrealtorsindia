import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./css/createPtojectLayout.module.css";
import FormCard from "../../Utils/cards/FormCard";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";
import SingleImageUplaod from "../../Utils/ImagesElements/Single-image-upload/SingleImageUplaod";
import {
  handelUploadThumblin,
  handelUploadProjectCoverImages,
  handelDeleteCoverImage,
  handelUploadFloorPlanImages,
  handelDeleteFloorImage,
  handelDeleteThumblinImage,
} from "../../Utils/ImagesElements/imageHandlers";
import ImageGallery from "../../Utils/ImagesElements/image-gallery/ImageGallery";

export default function UpdateProject(props) {
  const router = useRouter();
  const { id } = router.query;
  const {
    loading,
    setloading,
    handelGetProject,
    projectData,
    projectCoverImages,
    peojectFloorPlanImages,
    ProjectThumblin,
  } = useContext(ProjectContext);
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
  console.log(id);

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
            <div className={styles.right_Side}>
              <div>
                <SingleImageUplaod
                  title="Upload Thumblin"
                  handelfomSubmit={handelUploadThumblin}
                  dataFor={id}
                  singleImage={ProjectThumblin}
                  deleteAction={handelDeleteThumblinImage}
                  loading={loading}
                  setloading={setloading}
                />
              </div>
              <div>
                <ImageGallery
                  title="Upload Cover Images"
                  handelfomSubmit={handelUploadProjectCoverImages}
                  dataFor={id}
                  apiImages={projectCoverImages}
                  deletAction={handelDeleteCoverImage}
                  loadingAction={loading}
                  setloading={setloading}
                  imageFor="ProjectCoverImage"
                />
              </div>

              <div>
                <ImageGallery
                  title="Upload Floor Plan"
                  handelfomSubmit={handelUploadFloorPlanImages}
                  dataFor={id}
                  apiImages={peojectFloorPlanImages}
                  deletAction={handelDeleteFloorImage}
                  loadingAction={loading}
                  setloading={setloading}
                  imageFor="floorPlanImages"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
