import React, { useState } from "react";
import styles from "./css/ButtonCheckBox.module.css";

export default function ButtonCheckBox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`${styles.checkBox} ${isChecked ? styles.checked : ""}`} onClick={handleCheckBoxClick}>
      <div className={styles.checkBoxInner}>
        <span className={`${styles.checkBoxValue} ${isChecked ? styles.checkedValue : ""}`}>{label}</span>
      </div>
    </div>
  );
}
