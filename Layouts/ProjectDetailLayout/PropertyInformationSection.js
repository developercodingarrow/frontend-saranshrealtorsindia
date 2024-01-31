import React from "react";
import styles from "./css/propertyInfoSection.module.css";

export default function PropertyInformationSection(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.project_detailsContainer}>
      <div className={styles.section_Heading}>
        <h3 className={"global_subHeading"}>Property Information</h3>
      </div>
      <div className={styles.project_detail_wrapper}>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Builder</div>
          <div className={styles.project_data}>{data.builder}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>RERA NO</div>
          <div className={styles.project_data}>{data.reraNo}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>City</div>
          <div className={styles.project_data}>{data.city}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Location</div>
          <div className={styles.project_data}>{data.projectLocation}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Floors</div>
          <div className={styles.project_data}>{data.floors}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Units</div>
          <div className={styles.project_data}>{data.unitsNo}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Project Area</div>
          <div className={styles.project_data}>{data.projectArea}</div>
        </div>

        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Basic Price</div>
          <div className={styles.project_data}>{data.basicPrice}</div>
        </div>
        <div className={styles.project_deatilBox}>
          <div className={styles.project_fileds}>Possions</div>
          <div className={styles.project_data}>{data.Possession}</div>
        </div>
      </div>
    </div>
  );
}
