import React, { useContext } from "react";
import styles from "./css/blogList.module.css";
import { useRouter } from "next/router";
import { BlogContext } from "../../ContextApi/BlogContextApi";
import DynamicTable from "../../Utils/Table/DynimicTable";
import { FillterContext } from "../../ContextApi/FillterContext";
import DynamicTableCopy from "../../Utils/Table/DynimicTable copy";

export default function BlogList(props) {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
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

  const router = useRouter();
  const { handelnewBlog } = useContext(BlogContext);

  const handelNewBlogCreate = async () => {
    try {
      const res = await handelnewBlog({});
      console.log(res);
      if (res.data.status === "success") {
        router.push(`/super-admin/blog/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelView = () => {};

  console.log(tableData);
  return (
    <>
      {tableData ? (
        <div className={styles.mainContainer}>
          <div className={styles.pageTitle}>{pageTitle}</div>
          <button onClick={handelNewBlogCreate}>Add New Blog</button>
          <div className={styles.componentWrapper}>
            <div className={styles.tablePart}>
              <div className={styles.card_wrapper}>
                <div className={styles.card_titleBox}>
                  <p>Blog List</p>
                </div>
                <div className={styles.card}>
                  <div className={styles.fillterContainer}>table fillter</div>
                  <div className={styles.tableContainer}>
                    <div>
                      {tableData && (
                        <DynamicTable
                          visibalRows={visibalRows}
                          tableData={tableData}
                          tableColumns={tableColumn}
                          handelViewAction={handelView}
                          handelbtnAction={handelView}
                          folderPath="blog-images"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
