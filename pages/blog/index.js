import React from "react";
import BlogListLayout from "../../Layouts/blogLayout/BlogListLayout";
import BlogCardWrapper from "../../components/blogComponent/BlogCardWrapper";

export default function BlogListPage() {
  return (
    <BlogListLayout>
      <BlogCardWrapper />
    </BlogListLayout>
  );
}
