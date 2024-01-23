import React, { useContext } from "react";
import styles from "./css/TwoColumTableForm.module.css";
import { FillterContext } from "../../ContextApi/FillterContext";
import { AppContext } from "../../ContextApi/AppContextApi";
import DynamicTable from "../../Utils/Table/DynimicTable";
import useUserRoleColumns from "../../custome-hooks/useUserRoleColumns";
import FormCard from "../../Utils/cards/FormCard";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";
import TableWrapper from "../DashBoardLayout/TableWrapper";
import Model from "../../Utils/model/Model";

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
    viewAction,
    editAction,
    modelYesAct,
    createNewBtn,
    createNew,
  } = props;

  const { isModalOpen, setIsModalOpen, handleOpenModal, handleCloseModal } =
    useContext(AppContext);

  const userRole = "super-admin";
  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  const tableColumns = useUserRoleColumns(userRole, tableColumn, {
    "super-admin": SuperAdminColum,
    admin: [],
  });

  return (
    <>
      <Model
        title="Your Modal Title"
        description="Your modal description goes here."
        onYesClick={modelYesAct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <div className={styles.mainContainer}>
        <PageHeader
          pageTitle="Products"
          btnText={createNewBtn}
          handelCreate={createNew}
        />
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
                  handelViewAction={viewAction}
                  handelEditAction={editAction}
                  handelDeleteAction={handleOpenModal}
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
