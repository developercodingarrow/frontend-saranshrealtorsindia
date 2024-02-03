import React from "react";
import styles from "./css/featureListing.module.css";
import Image from "next/image";
import heroBanner from "../../public/web-static-images/desktop-banner.webp";

import {
  LuIndianRupee,
  BsBuildingCheck,
  CiLocationOn,
  TbSofa,
  BsTextarea,
  MdVerifiedUser,
  PiWhatsappLogoThin,
  FcCallback,
  VscMail,
  IoArrowRedoOutline,
} from "../../Utils/ApplicationIcon";
import ClickBtn from "../../Utils/Elements/buttonsElements/ClickBtn";
export default function FeatureListing(props) {
  const { sectionTitle, sortDescreption } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.sectionHeader_box}>
        <h3 className="global_PageTitle">{sectionTitle}</h3>
        <p className="global_contentStyle">{sortDescreption}</p>
      </div>
      <div className={styles.card_wrraper}>
        {[1, 2, 3].map((el, i) => {
          return (
            <div className={styles.card_container}>
              <div className={styles.card_ImageWrapper}>
                <Image src={heroBanner} className={styles.cardImageStyle} />
                <div className={styles.card_imageTag}> Feature </div>
              </div>
              <div className={styles.card_body}>
                <div className={styles.card_titleBox}>
                  {" "}
                  <h5 className="global_subHeading2">
                    The Center Court Ashiana Landcraft
                  </h5>{" "}
                </div>
                <div className={styles.twoColumBox}>
                  <div className={styles.unitType_box}>
                    {" "}
                    <span className={styles.unitIconBox}>
                      {" "}
                      <TbSofa />
                    </span>
                    <span className={styles.text_style}>2 BHK, 3BHK</span>{" "}
                  </div>

                  <div className={styles.unitType_box}>
                    {" "}
                    <span className={styles.unitIconBox}>
                      {" "}
                      <BsBuildingCheck />
                    </span>
                    <span className={styles.text_style}>Godrej</span>{" "}
                  </div>
                </div>

                <div className={styles.twoColum_spacingBox}>
                  <div className={styles.card_priceBox}>
                    <span className={styles.unitIconBox}>
                      <LuIndianRupee />{" "}
                    </span>
                    <span className={styles.priceText}>45</span>
                    <span className={styles.unitIconBox}>crore</span>
                  </div>
                  <div className={styles.btnBox}>
                    <ClickBtn btnText="Details" btnDesign="detailBtn" />
                  </div>
                </div>
              </div>
              <div className={styles.card_footer}>
                <div className={styles.rera_wrapper}>
                  {" "}
                  <span className={styles.text_style}> RERA NO </span>
                  <span className={"global_subHeading2"}>
                    {" "}
                    26 of 2026{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
