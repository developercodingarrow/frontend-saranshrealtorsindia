import React from "react";
import styles from "./css/listingcard.module.css";
import Image from "next/image";
import sampleImage from "../../../public/web-static-images/sampleImage.png";

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
} from "../../ApplicationIcon";
import ActionBtn from "../../Elements/buttonsElements/ActionBtn";

export default function ListingCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_detailsWrapper}>
        <div className={styles.cardImage_container}>
          <Image
            src={sampleImage}
            width={250}
            height={250}
            alt="sample-image"
            className={styles.image_Style}
          />
        </div>
        <div className={styles.details_Container}>
          <div className={styles.titleBox}>
            <span className={styles.title_detail}>
              <p>
                3 BHK Flat In Brisk Lumbini Sec 109 Gurugaon For Sale In Sect
              </p>
            </span>
            <span className={styles.price_details}>
              <span className={styles.price_iconBox}>
                {" "}
                <LuIndianRupee />
              </span>
              1.4 cr
            </span>
          </div>
          <div className={styles.project_main_Detail}>
            <div className={styles.mainDetail_Box}>
              <span className={styles.mainDetail_iconBox}>
                {" "}
                <BsBuildingCheck />
              </span>
              <span className={styles.mainDetail_text}>Godrej </span>
            </div>
            <div className={styles.mainDetail_Box}>
              {" "}
              <span className={styles.mainDetail_iconBox}>
                {" "}
                <CiLocationOn />
              </span>
              <span className={styles.mainDetail_text}>Gurgaon </span>
            </div>
          </div>
          <div className={styles.baise_deatils}>
            <div className={styles.baise_UnitBox}>
              <div className={styles.baiseBox}>
                <div className={styles.unitBox_icon}>
                  {" "}
                  <TbSofa />
                </div>
                <div className={styles.unitBox_details}>
                  <div className={styles.baiseBox_title}>Unit Types</div>
                  <div className={styles.baiseBox_value}>
                    2 BHK , 3BHK, 4 BHK
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.baise_areWarpper}>
              <div className={styles.baiseAreaBox}>
                <div className={styles.areaBox_icon}>
                  {" "}
                  <BsTextarea />
                </div>
                <div className={styles.baiseBox_details}>
                  <div className={styles.baiseBox_title}>Super area</div>
                  <div className={styles.baiseBox_value}>1171sqft</div>
                </div>
              </div>
              <div className={styles.baiseAreaBox}>
                <div className={styles.areaBox_icon}>
                  {" "}
                  <MdVerifiedUser />
                </div>
                <div className={styles.baiseBox_details}>
                  <div className={styles.baiseBox_title}>RERA No</div>
                  <div className={styles.baiseBox_value}>403 of 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card_actionContainer}>
        <div className={styles.dekstop_actionBox}>
          <div className={styles.card_priceBox}>
            <div>1.25 Cr</div>
            <div>₹10,695/sqft</div>
          </div>
          <div className={styles.dekstop_actionWrapper}>
            <ActionBtn
              label="Enqurey"
              btnDesign="cardEnqueryBtn"
              buttonPadding="buttonPadding"
            />
            <ActionBtn
              label="Details"
              btnDesign="cardDetailBtn"
              buttonPadding="buttonPadding"
            />
          </div>
        </div>
        <div className={styles.mobile_actionBox}>
          <div className={styles.mobile_actionIconBox}>
            <PiWhatsappLogoThin className={styles.whatsaapIcon} />
          </div>
          <div className={styles.mobile_actionIconBox}>
            <FcCallback />
          </div>
          <div className={styles.mobile_actionIconBox}>
            <VscMail />
          </div>
          <div className={styles.mobile_actionIconBox}>
            <IoArrowRedoOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
