import React from "react";
import styles from "./css/blogcardwrapper.module.css";
import sampleImage from "../../public/web-static-images/sampleImage.png";
import Image from "next/image";
import Link from "next/link";
import ActionBtn from "../../Utils/Elements/buttonsElements/ActionBtn";
import { GiCarKey } from "../../Utils/ApplicationIcon";
export default function BlogCardWrapper() {
  return (
    <div className={styles.main_container}>
      <div className={styles.page_header}>
        <div className={styles.iconBox}>
          {" "}
          <GiCarKey />
        </div>
        <span>The Real Estate Time </span>
      </div>
      <div className={styles.blog_cardWraper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return (
            <div className={styles.blogCard_container}>
              <div className={styles.card_imageBox}>
                <Image
                  src={sampleImage}
                  width={500}
                  height={500}
                  className={styles.image_style}
                />
              </div>
              <div className={styles.card_body}>
                <div className={styles.blog_titleBox}>
                  <Link href={"/"} className={styles.title_linkStyle}>
                    Book your affordable dream home at Pareena Rama Homes in
                    Sector 89, Gurgaon
                  </Link>
                </div>
                <div className={styles.blog_sortDescreption}>
                  <p>
                    Book your affordable dream home at Pareena Rama Homes in
                    Sector 89, Gurgaon, and unlock the
                  </p>
                </div>
              </div>
              <div className={styles.card_footer}>
                <ActionBtn
                  label="Read More"
                  onClick={""}
                  btnDesign="cardEnqueryBtn"
                  buttonPadding="buttonPadding"
                  itemId="123"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
