import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/router";
export const BlogContext = createContext();
import {
  createNewBlog,
  updateBlog,
  getBlogByID,
  allBlog,
  deleteBlogThumblinImages,
  deleteBlog,
} from "../Actions/blogActions";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
  genericGetHandler,
  genericPagePushHandler,
} from "../Utils/generichandler/generichandler";

export default function BlogContextApiProvider({ children }) {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [actionLoading, setactionLoading] = useState(false);
  const [allblogs, setallblogs] = useState([]);
  const [blogThumblin, setblogThumblin] = useState({});
  const [blogCoverImage, setblogCoverImage] = useState({});

  const handelnewBlog = genericDataHandler(createNewBlog);
  const handelUpadteBlog = genericDataAndSlugHandler(updateBlog);
  const handelDeleteBlog = genericDataHandler(deleteBlog);

  const handelAllBlogs = async () => {
    try {
      const res = await allBlog();
      setallblogs(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelGetBlog = async (id) => {
    try {
      const res = await getBlogByID(id);
      setblogThumblin(res.data.result.BlogThumblin);
      setblogCoverImage(res.data.result.BlogCoverImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handelView = (passValue) => {
    genericPagePushHandler(router, "/super-admin/blog", passValue);
  };

  const handelEdit = (passValue) => {
    genericPagePushHandler(router, "/super-admin/blog", passValue);
  };

  return (
    <BlogContext.Provider
      value={{
        loading,
        setloading,
        handelnewBlog,
        handelUpadteBlog,
        handelGetBlog,
        blogThumblin,
        blogCoverImage,
        actionLoading,
        setactionLoading,
        allblogs,
        handelAllBlogs,
        handelView,
        handelEdit,
        handelDeleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
