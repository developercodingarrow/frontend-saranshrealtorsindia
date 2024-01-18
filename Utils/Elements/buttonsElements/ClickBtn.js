import React from "react";
import styles from "./css/clickBtn.module.css";
import { BsFillCloudUploadFill } from "../../ApplicationIcon";

export default function ClickBtn(props) {
  const { handelClick, btnText, icon } = props;

  let IconComponent = null;

  if (icon === "delete") {
    IconComponent = <MdDelete />;
  } else if (icon === "edit") {
    IconComponent = <MdEdit />;
  } else if (icon === "upload") {
    IconComponent = <BsFillCloudUploadFill />;
  }

  return (
    <button onClick={handelClick} className={styles.btnStyle}>
      {IconComponent && <span>{IconComponent}</span>}
      {btnText && <span>{btnText}</span>}
    </button>
  );
}
