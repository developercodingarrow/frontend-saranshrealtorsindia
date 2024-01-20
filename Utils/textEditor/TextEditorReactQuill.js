import React, { useContext, useRef, useState } from "react";
import styles from "./css/textEditorReactQuill.module.css";
import dynamic from "next/dynamic"; // If using Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  CreateEditorModules,
  CreateEditorformats,
} from "../../JsonData/textEditorDesign";
import SubmitBtn from "../Elements/buttonsElements/SubmitBtn";

export default function TextEditorReactQuill(props) {
  const { handeSubmit, dataFor, updateFiled } = props;
  const [editorValue, seteditorValue] = useState("");
  const handelEditorOnChange = (e) => {
    seteditorValue(e);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handeSubmit({ [updateFiled]: editorValue }, dataFor);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>Poject Brief</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <form onSubmit={handelSubmit}>
            <div className={styles.textEditor_wrapper}>
              <ReactQuill
                theme="snow"
                modules={CreateEditorModules}
                formats={CreateEditorformats}
                value={editorValue}
                onChange={handelEditorOnChange}
                className={styles.reactQuill_style}
              />
            </div>
            <div className={styles.submitBtn_wrapper}>
              <SubmitBtn
                text="submit"
                buttonstyle="fullWidthBtn"
                btnColor="primaryBtnColor"
                btnSze="fullWidthBtnSize"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
