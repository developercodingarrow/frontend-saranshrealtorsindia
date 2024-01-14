import React, { useContext } from "react";
import styles from "./css/TwoColumTableForm.module.css";
import { FillterContext } from "../../ContextApi/FillterContext";
import DynamicTable from "../../Utils/Table/DynimicTable";
import useUserRoleColumns from "../../custome-hooks/useUserRoleColumns";
import {
  cityDataColoum,
  CitysampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";
import FormCard from "../../Utils/cars/FormCard";
import { CreatecitysFileds, CityDetailsApi } from "../../JsonData/formFileds";

export default function TwoCloumTableForm({ children }) {
  const userRole = "super-admin";
  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  const tableColumns = useUserRoleColumns(userRole, cityDataColoum, {
    "super-admin": SuperAdminColum,
    admin: [],
  });

  const handelView = () => {};

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>Product Detail</div>
        <div className={styles.componentWrapper}>
          <div className={styles.tablePart}>
            <div className={styles.card_wrapper}>
              <div className={styles.card_titleBox}>
                <p>City List</p>
              </div>
              <div className={styles.card}>
                <div className={styles.fillterContainer}>table fillter</div>
                <div className={styles.tableContainer}>
                  <DynamicTable
                    visibalRows={visibalRows}
                    tableData={CitysampleData}
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
              title="CREATE CITY"
              customeInputs={CreatecitysFileds}
              apiData={CityDetailsApi}
              actionType="submit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
