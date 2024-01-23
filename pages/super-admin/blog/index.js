import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import BlogList from "../../../Layouts/blog/BlogList";
import { blogData, blogDataColoum } from "../../../JsonData/TableData";
import { BlogContext } from "../../../ContextApi/BlogContextApi";
import TwoCloumTableForm from "../../../Layouts/TwoColumLayout/TwoCloumTableForm";

export default function BlogListPage() {
  const { handelAllBlogs, allblogs } = useContext(BlogContext);

  useEffect(() => {
    handelAllBlogs();
  }, []);

  console.log(allblogs);
  return (
    <DashboardLayout>
      {/* <BlogList tableData={allblogs} tableColumn={blogDataColoum} /> */}
      <TwoCloumTableForm
        pageTitle="Product"
        tableTitle="Product List"
        tableData={allblogs}
        tableColumn={blogDataColoum}
        sideForm={false}
        folderPath="blog-images"
      />
    </DashboardLayout>
  );
}
