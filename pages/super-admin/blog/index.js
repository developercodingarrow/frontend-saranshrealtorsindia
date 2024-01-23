import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../../Layouts/DashBoardLayout/DashboardLayout";
import BlogList from "../../../Layouts/blog/BlogList";
import { blogData, blogDataColoum } from "../../../JsonData/TableData";
import { BlogContext } from "../../../ContextApi/BlogContextApi";

export default function BlogListPage() {
  const { handelAllBlogs, allblogs } = useContext(BlogContext);

  useEffect(() => {
    handelAllBlogs();
  }, []);

  console.log(allblogs);
  return (
    <DashboardLayout>
      <BlogList tableData={allblogs} tableColumn={blogDataColoum} />
    </DashboardLayout>
  );
}
