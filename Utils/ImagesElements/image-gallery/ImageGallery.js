import React, { useRef, useState } from "react";
import styles from "./css/imageGallery.module.css";
import Image from "next/image";
import { MdDelete, GoUpload, IoMdCheckmark } from "../../ApplicationIcon";
import { useImageGalleryUpload } from "../../../custome-hooks/useImageGalleryUpload";
import ClickBtn from "../../Elements/buttonsElements/ClickBtn";

export default function ImageGallery(props) {
  const {
    title,
    handelfomSubmit,
    dataFor,
    imageFor,
    apiImages,
    deletAction,
    setloading,
  } = props;

  const fileInputRef = useRef(null);

  const {
    imagePreview,
    handleImageSelect,
    removeImage,
    selectedImages,
    deleteImage,
  } = useImageGalleryUpload();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handelUplaod = async () => {
    try {
      setloading(true);
      const res = await handelfomSubmit(selectedImages, imageFor, dataFor);
      setloading(false);
      console.log(res);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const handelDelete = async (id) => {
    try {
      setloading(true);
      const res = await deletAction(id, dataFor);
      console.log(res);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  console.log(apiImages);

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>{title}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.card_body}>
          <div className={styles.gallery_wrapper}>
            {apiImages.map((image, index) => {
              return (
                <div className={styles.uploadImage_container}>
                  <div className={styles.uploadImage_body}>
                    <Image
                      src={`/project-images/${image.url}`}
                      alt="Uploaded"
                      width={350}
                      height={300}
                      className={styles.thumblinStyle}
                    />
                    <div className={styles.right_IconBox}>
                      {" "}
                      <IoMdCheckmark />{" "}
                    </div>
                  </div>
                  <div className={styles.uploadImage_footer}>
                    <div className={styles.uploadImage_FooterDetails}>
                      <p className={styles.Uplaoded_imageName}>
                        {" "}
                        pathcover image
                      </p>
                      <p className={styles.uploed_imageSize}>
                        {" "}
                        22 <span>kb</span>{" "}
                      </p>
                    </div>
                    <div className={styles.image_actionBox}>
                      <div className={styles.image_actionBtn}>
                        <MdDelete onClick={() => handelDelete(image._id)} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.gallery_wrapper}>
            {imagePreview.map((image, index) => {
              return (
                <div className={styles.uploadImage_container}>
                  <div className={styles.uploadImage_body}>
                    <Image
                      src={image.dataUrl}
                      alt="Uploaded"
                      width={350}
                      height={300}
                      className={styles.thumblinStyle}
                    />
                    <div className={styles.right_IconBox}>
                      {" "}
                      <IoMdCheckmark />{" "}
                    </div>
                  </div>
                  <div className={styles.uploadImage_footer}>
                    <div className={styles.uploadImage_FooterDetails}>
                      <p className={styles.Uplaoded_imageName}>
                        {" "}
                        pathcover image
                      </p>
                      <p className={styles.uploed_imageSize}>
                        {" "}
                        22 <span>kb</span>{" "}
                      </p>
                    </div>
                    <div className={styles.image_actionBox}>
                      <div className={styles.image_actionBtn}>
                        <MdDelete onClick={() => removeImage(index)} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.upload_dropBox_wrapper}>
              <div className={styles.dropBox} onClick={handleClick}>
                <p>Drop File</p>
              </div>
              <div className={styles.uploadBtn_wrapper}>
                <ClickBtn handelClick={handelUplaod} icon="upload" />
              </div>
            </div>
          </div>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className={styles.imageInput}
            onChange={handleImageSelect}
          />

          {/* <button onClick={UploadImage}>Upload</button> */}
        </div>
      </div>
    </div>
  );
}
