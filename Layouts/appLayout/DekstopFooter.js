import React from "react";
import styles from "./css/dekstopFooter.module.css";
import Link from "next/link";
import {
  IoIosCall,
  AiOutlineInstagram,
  FaFacebook,
  FaXTwitter,
} from "../../Utils/ApplicationIcon";

export default function DekstopFooter() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.column_wrapper}>
        <div className={styles.footer_column}>
          <div className={styles.coulmnTitle_box}>Company</div>
          <div className={styles.footer_linkWrapper}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <Link href={"/"} className={styles.footer_linkStyle}>
                  about us
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.footer_column}>
          <div className={styles.coulmnTitle_box}>Company</div>
          <div className={styles.footer_linkWrapper}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <Link href={"/"} className={styles.footer_linkStyle}>
                  about us
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.footer_column}>
          <div className={styles.coulmnTitle_box}>Company</div>
          <div className={styles.footer_linkWrapper}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <Link href={"/"} className={styles.footer_linkStyle}>
                  about us
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.footer_column}>
          <div className={styles.coulmnTitle_box}>Company</div>
          <div className={styles.contact_DetailBox}>
            <div className={styles.addres_filed}>
              <div className={styles.addres_title}>Our Branch Address</div>
              <div className={styles.addres_data}>
                <p>
                  416, Tower 4, DLF Corporate Greens, Sector 74A, Gurgaon –
                  122004
                </p>
              </div>
            </div>
            <div className={styles.addres_filed}>
              <div className={styles.addres_title}>Contact No</div>
              <div className={styles.contactFiled}>
                <span>
                  {" "}
                  <IoIosCall />
                </span>
                <span>+91-9717930806</span>
              </div>
              <div className={styles.contactFiled}>
                <span>
                  {" "}
                  <IoIosCall />
                </span>
                <span>+91-7503255000</span>
              </div>
              <div className={styles.contactFiled}>
                <span>
                  {" "}
                  <IoIosCall />
                </span>
                <span> 0124-5181141</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.social_mediaBox}>
        <Link href={"/"} className={styles.social_links}>
          <FaFacebook />
        </Link>
        <Link href={"/"} className={styles.social_links}>
          <AiOutlineInstagram />
        </Link>
        <Link href={"/"} className={styles.social_links}>
          <FaXTwitter />
        </Link>
      </div>
      <div className={styles.footer_copyWrite}>
        <p>© Copyright ©2024 All rights reserved by Saransh Realtors</p>
      </div>
    </div>
  );
}
