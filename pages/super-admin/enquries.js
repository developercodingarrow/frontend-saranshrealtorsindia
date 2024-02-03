import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import { enquiesTableColumn } from "../../JsonData/TableData";
import { EnquireyContext } from "../../ContextApi/enquireyContectApi";
import * as XLSX from "xlsx";
export default function EnquriesPage() {
  const { enquries, handelAllEnquries, handelDeleteEnqurie, toggleAction } =
    useContext(EnquireyContext);

  useEffect(() => {
    handelAllEnquries();
  }, [toggleAction]);
  console.log(enquries);

  const handelDownoald = () => {
    const ws = XLSX.utils.json_to_sheet(enquries);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "UsersData");
    XLSX.writeFile(wb, "enquires_data.xlsx");
  };

  return (
    <DashboardLayout>
      <TwoCloumTableForm
        pageTitle="Enquires Page"
        tableTitle="EnquiresList"
        tableColumn={enquiesTableColumn}
        tableData={enquries}
        modelYesAct={handelDeleteEnqurie}
        createNewBtn="Downold Enquires"
        createNew={handelDownoald}
      />
    </DashboardLayout>
  );
}
