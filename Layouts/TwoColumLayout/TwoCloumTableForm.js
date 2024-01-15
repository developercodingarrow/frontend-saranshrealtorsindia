import React, { useContext } from "react";
import styles from "./css/TwoColumTableForm.module.css";
import { FillterContext } from "../../ContextApi/FillterContext";
import DynamicTable from "../../Utils/Table/DynimicTable";
import useUserRoleColumns from "../../custome-hooks/useUserRoleColumns";
import FormCard from "../../Utils/cards/FormCard";

export default function TwoCloumTableForm(props) {
  const {
    pageTitle,
    tableTitle,
    formTitle,
    formFields,
    apiData,
    forAction,
    tableColumn,
    tableData,
    SuperAdminColum,
  } = props;

  const userRole = "super-admin";
  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  const tableColumns = useUserRoleColumns(userRole, tableColumn, {
    "super-admin": SuperAdminColum,
    admin: [],
  });

  const handelView = () => {};

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.componentWrapper}>
          <div className={styles.tablePart}>
            <div className={styles.card_wrapper}>
              <div className={styles.card_titleBox}>
                <p>{tableTitle}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.fillterContainer}>table fillter</div>
                <div className={styles.tableContainer}>
                  <DynamicTable
                    visibalRows={visibalRows}
                    tableData={tableData}
                    tableColumns={tableColumns}
                    handelViewAction={handelView}
                    handelbtnAction={handelView}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formPart}>
            <FormCard
              title={formTitle}
              customeInputs={formFields}
              apiData={apiData}
              actionType={forAction}
            />
          </div>
        </div>
      </div>
    </>
  );
}
