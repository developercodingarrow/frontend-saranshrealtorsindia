import React, { useContext } from "react";
import { useRouter } from "next/router";
import { BlogContext } from "../../ContextApi/BlogContextApi";

export default function BlogList() {
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

  return (
    <>
      <div>
        <p>Create Blog </p>
        <button onClick={handelNewBlogCreate}>Add New Blog</button>
      </div>
    </>
  );
}
