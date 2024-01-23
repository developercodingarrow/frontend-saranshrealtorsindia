import React from "react";
import styles from "./css/dateRange.module.css";

export default function DateRange(props) {
  const {
    handelStartDate,
    handelEndDate,
    handelBtn,
    startDateValue,
    endDateValue,
  } = props;
  return (
    <div className={styles.dateInput_container}>
      <input
        type="date"
        placeholder="Start Date"
        value={startDateValue}
        onChange={handelStartDate}
        className={styles.input}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDateValue}
        onChange={handelEndDate}
        className={styles.input}
      />

      <button onClick={handelBtn}> apply</button>
    </div>
  );
}
