import React, { useRef } from "react";
import styles from "./css/singleImageUpload.module.css";
import useImageUpload from "../../../custome-hooks/useImageUpload";
import Image from "next/image";
import { MdDelete, GoUpload, IoMdCheckmark } from "../../ApplicationIcon";
import ActionBtn from "../../Elements/buttonsElements/ActionBtn";

export default function SingleImageUplaod(props) {
  const { title, handelfomSubmit, dataFor } = props;

  const testhandel = () => {
    alert("ok");
  };

  const {
    image,
    handleImageChange,
    removeImage,
    fileInputKey,
    imageName,
    imageSize,
    sizePrefix,
    UploadImage,
    originalFile,
  } = useImageUpload(testhandel);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Check if the ref has been assigned before attempting to access its properties
    if (fileInputRef.current) {
      // Trigger the click event on the file input
      fileInputRef.current.click();
    }
  };

  const handelthumblinUpload = async () => {
    try {
      const res = await handelfomSubmit(
        originalFile,
        "ProjectThumblin",
        dataFor
      );
      console.log(res);
      // alert("uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>{title}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.card_body}>
          {!image ? (
            <div className={styles.dropBox} onClick={handleClick}>
              <p>Drop File</p>
            </div>
          ) : (
            <div className={styles.uploadImage_container}>
              <div className={styles.uploadImage_body}>
                <Image
                  src={image}
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
                  <p className={styles.Uplaoded_imageName}>{imageName}</p>
                  <p className={styles.uploed_imageSize}>
                    {" "}
                    {imageSize} <span>{sizePrefix}</span>{" "}
                  </p>
                </div>
                <div className={styles.image_actionBox}>
                  <div className={styles.image_actionBtn}>
                    <MdDelete onClick={removeImage} />
                  </div>
                  <div className={styles.image_actionBtn}>
                    <GoUpload onClick={handelthumblinUpload} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
            className={styles.imageInput}
            key={fileInputKey}
          />

          {/* <button onClick={UploadImage}>Upload</button> */}
        </div>
      </div>
    </div>
  );
}
