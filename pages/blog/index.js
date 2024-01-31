import React, { useContext } from "react";
import BlogListLayout from "../../Layouts/blogLayout/BlogListLayout";
import BlogCardWrapper from "../../components/blogComponent/BlogCardWrapper";
import { uiAllBlog } from "../../Actions/blogActions";
import { UIBlogContext } from "../../ContextApi/userinterface/UiBlogContectApi";

export default function BlogListPage({ initialProject }) {
  const { blogLists, setblogLists } = useContext(UIBlogContext);

  setblogLists(initialProject);

  console.log(blogLists);
  return (
    <BlogListLayout>
      <BlogCardWrapper />
    </BlogListLayout>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    const result = await uiAllBlog();
    console.log(result);

    if (result.data.status === "success") {
      return {
        props: {
          initialProject: result.data.result,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialProject: {},
    },
  };
}
