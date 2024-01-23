import React, { useContext } from "react";
import styles from "./css/TwoColumTableForm.module.css";
import { FillterContext } from "../../ContextApi/FillterContext";
import DynamicTable from "../../Utils/Table/DynimicTable";
import useUserRoleColumns from "../../custome-hooks/useUserRoleColumns";
import FormCard from "../../Utils/cards/FormCard";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";
import TableWrapper from "../DashBoardLayout/TableWrapper";

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
    sideForm,
    folderPath,
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
        <PageHeader pageTitle="Products" />
        <div className={styles.componentWrapper}>
          <div className={sideForm ? styles.tablePart : styles.fullTable}>
            <div className={styles.card_wrapper}>
              <TableTitle tableTitle={tableTitle} />
              <FillterBar data={tableData} />
              <TableWrapper>
                <DynamicTable
                  visibalRows={visibalRows}
                  tableData={tableData}
                  tableColumns={tableColumns}
                  handelViewAction={handelView}
                  handelbtnAction={handelView}
                  folderPath={folderPath}
                />
              </TableWrapper>
            </div>
          </div>
          {sideForm && (
            <div className={styles.formPart}>
              <FormCard
                title={formTitle}
                customeInputs={formFields}
                apiData={apiData}
                actionType={forAction}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
