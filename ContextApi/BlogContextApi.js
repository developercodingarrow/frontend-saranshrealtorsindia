import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const BlogContext = createContext();
import {
  createNewBlog,
  updateBlog,
  getBlogByID,
  allBlog,
  deleteBlogThumblinImages,
} from "../Actions/blogActions";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
  genericGetHandler,
} from "../Utils/generichandler/generichandler";

export default function BlogContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [actionLoading, setactionLoading] = useState(false);
  const [allblogs, setallblogs] = useState([]);
  const [blogThumblin, setblogThumblin] = useState({});
  const [blogCoverImage, setblogCoverImage] = useState({});

  const handelnewBlog = genericDataHandler(createNewBlog);
  const handelUpadteBlog = genericDataAndSlugHandler(updateBlog);

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
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
