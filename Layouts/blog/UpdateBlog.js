import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { BlogContext } from "../../ContextApi/BlogContextApi";
import styles from "./css/updateBlog.module.css";
import {
  blogtitle,
  BlogDetailsApi,
  metaescription,
} from "../../JsonData/formFileds";
import FormCard from "../../Utils/cards/FormCard";
import TextEditorReactQuill from "../../Utils/textEditor/TextEditorReactQuill";
import SingleImageUplaod from "../../Utils/ImagesElements/Single-image-upload/SingleImageUplaod";
import {
  handelDeleteBlogThumblinImage,
  handelUploadBlogThumblin,
  handelUploadBlogCover,
  handelDeleteBlogCoverImage,
} from "../../Utils/ImagesElements/imageHandlers";
import ChipInput from "../../Utils/Elements/inputs-elements/ChipInput";

export default function UpdateBlog(props) {
  const router = useRouter();
  const { id } = router.query;
  const {
    loading,
    setloading,
    handelnewBlog,
    handelUpadteBlog,
    handelGetBlog,
    blogThumblin,
    blogCoverImage,
    actionLoading,
    setactionLoading,
  } = useContext(BlogContext);
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    ProjectStatusFiled,
    ProjectUnitsTypeFiled,
    ProjectPricesFiled,
    ProjectLocationFiled,
    projectfeatureFiled,
  } = props;

  useEffect(() => {
    handelGetBlog(id);
  }, [id, actionLoading]);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.componentWarper}>
          <div className={styles.left_Side}>
            <FormCard
              title="Blog Details"
              customeInputs={blogtitle}
              apiData={BlogDetailsApi}
              actionType="submit"
              handelfomSubmit={handelUpadteBlog}
              dataFor={id}
            />

            <div>
              <TextEditorReactQuill
                handeSubmit={handelUpadteBlog}
                dataFor={id}
                updateFiled="blogDescreption"
              />
            </div>

            <div>
              <ChipInput
                title="Keywords"
                handeSubmit={handelUpadteBlog}
                dataFor={id}
                updateFiled="keywords"
              />
            </div>

            <div>
              <FormCard
                title="Meta Decreption"
                customeInputs={metaescription}
                apiData={BlogDetailsApi}
                actionType="submit"
                handelfomSubmit={handelUpadteBlog}
                dataFor={id}
              />
            </div>
          </div>

          <div className={styles.right_Side}>
            <div>
              <SingleImageUplaod
                title="Upload Thumblin"
                handelfomSubmit={handelUploadBlogThumblin}
                dataFor={id}
                singleImage={blogThumblin}
                folderPath="blog-images"
                deleteAction={handelDeleteBlogThumblinImage}
                loading={actionLoading}
                setloading={setactionLoading}
                updateFiled="BlogThumblin"
              />
            </div>
            <div>
              <SingleImageUplaod
                title="Update Cover Image"
                handelfomSubmit={handelUploadBlogCover}
                dataFor={id}
                singleImage={blogCoverImage}
                folderPath="blog-images"
                deleteAction={handelDeleteBlogCoverImage}
                loading={actionLoading}
                setloading={setactionLoading}
                updateFiled="BlogCoverImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
