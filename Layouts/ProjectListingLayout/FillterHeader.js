import React from "react";
import styles from "./css/fillterDrawerHeader.module.css";
import { IoIosCloseCircle } from "../../Utils/ApplicationIcon";

export default function FillterHeader(props) {
  const { headercloseIconBox, headertitleBox, headerRightSide, resethandle } =
    props;
  return (
    <div className={styles.fillterDrawer_header}>
      <div className={styles.headerLeft_side}>
        {headercloseIconBox && (
          <span className={styles[headercloseIconBox]}>
            <IoIosCloseCircle />
          </span>
        )}
        <span className={styles[headertitleBox]}>
          <h3>Fillter </h3>
        </span>{" "}
      </div>
      <div className={styles[headerRightSide]}>
        <span onClick={resethandle}>Reset All</span>
      </div>
    </div>
  );
}
