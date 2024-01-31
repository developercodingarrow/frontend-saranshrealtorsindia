import React from "react";
import styles from "./css/sidBar.module.css";
import Image from "next/image";
import sampleImage from "../../../public/web-static-images/sampleImage.png";
export default function SideBar(props) {
  const { title, data } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.quickLink_bar}>
        <div className={styles.QuickLink_titleBox}>{title}</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
          return (
            <div className={styles.feature_cardContainer}>
              <div className={styles.featureImage_wrapper}>
                <Image
                  src={sampleImage}
                  width={100}
                  height={100}
                  className={styles.featureImage_style}
                />
              </div>
              <div className={styles.project_title}>
                <p>4 BHK 3976 Sq-ft Flat For Sale Sector 22, Gurgaon</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
