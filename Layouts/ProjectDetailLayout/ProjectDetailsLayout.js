import React, { useContext, useState } from "react";
import styles from "./css/projectDetail.module.css";
import Image from "next/image";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { IoGameControllerOutline } from "../../Utils/ApplicationIcon";
import EnquireForm from "../../Utils/cards/EnquireForm";
import {
  IoIosCall,
  IoIosArrowBack,
  IoCallOutline,
  MdOutlineMessage,
} from "../../Utils/ApplicationIcon";
import sampleImage from "../../public/web-static-images/sampleImage.png";
import DekstopFooter from "../appLayout/DekstopFooter";
export default function ProjectDetailsLayout() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);

  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));
  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />
      <div className={styles.detail_topContainer}>
        <div className={styles.project_titleBar}>
          <div>
            <p>2 BHK House For Sale In Sector 109</p>
          </div>
          <div>
            <p>45 Crore</p>
          </div>
        </div>
        <div className={styles.formImage_Container}>
          <div className={styles.carousel_container}>
            <Carousel images={images} className={styles.CarouselStyle} />
          </div>
          <div className={styles.form_Container}>
            <EnquireForm />
          </div>
        </div>
      </div>

      <div className={styles.content_Container}>
        <div className={styles.information_container}>
          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3>Property Information</h3>
            </div>
            <div className={styles.project_detail_wrapper}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                return (
                  <div className={styles.project_deatilBox}>
                    <div className={styles.project_fileds}>Listing Type</div>
                    <div className={styles.project_data}>sale</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3>Property Descreption</h3>
            </div>
            <div className={styles.project_descreptionWrapper}>
              <p>
                Looking for a spacious and well-maintained apartment in the
                heart of Kalyan. Look no further as we present to you a
                fantastic opportunity to own this 2 BHK apartment in Khadakpada.
                Situated in the sought-after Tharwani Asterdale project, this
                apartment is available for sale at a price of 75 across an area
                of 780 square feet, this apartment offers ample living space to
                comfortably accommodate a small or growing family. The apartment
                is thoughtfully designed with modern finishes and is being
                offered in an unfurnished state, allowing you to personalize the
                space to your you step inside, you will be greeted by a
                community view from the windows, providing a peaceful and
                pleasant ambiance. The apartment is located on the 5th floor of
                the building, offering a sense of privacy and tranquility. With
                a total of 19 floors in the building, you can enjoy the
                high-rise living Tharwani Asterdale project offers a host of
                amenities to enhance your lifestyle. Stay fit and active with
                the on-site gymnasium and swimming pool, perfect for indulging
                in a healthy daily routine. Your little ones will have endless
                fun at the dedicated kids play areas, ensuring they stay
                entertained and engaged throughout the day. Safety is given the
                utmost importance with 24 x 7 security and CCTV notable
                amenities include a spacious clubhouse, balconies overlooking
                the surroundings, high-speed elevators, a designated pet area,
                and indoor games facilities. The presence of service elevators
                adds convenience to your daily tasks, and the lobby in the
                building presents a grand entrance to your centrally located in
                Khadakpada, you will have easy access to the citys major
                amenities and transportation hubs. The building is equipped with
                maintenance staff and security personnel to cater to your needs
                at any time. Cleaning services are also provided to ensure a
                clean and well-maintained living miss out on this incredible
                opportunity to own a 2 BHK apartment in Tharwani Asterdale.
              </p>
            </div>
          </div>

          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3>Amenites</h3>
            </div>
            <div className={styles.amnites_Container}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => {
                return (
                  <div className={styles.aminitesBox}>
                    <div className={styles.aminites_IconBox}>
                      {" "}
                      <IoGameControllerOutline />{" "}
                    </div>
                    <div>24 x 7</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3>Floor Plan</h3>
            </div>
            <div className={styles.projectExra_ImageBox}>
              <Carousel images={images} className={styles.CarouselStyle} />
            </div>
          </div>

          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3>Lay Outs</h3>
            </div>
            <div className={styles.projectExra_ImageBox}>
              <Carousel images={images} className={styles.CarouselStyle} />
            </div>
          </div>
        </div>

        <div className={styles.side_bar_container}>
          <div className={styles.quickLink_bar}>
            <div className={styles.QuickLink_titleBox}>feature project</div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9.1].map(() => {
              return (
                <div className={styles.feature_cardContainer}>
                  <div className={styles.featureImage_wrapper}>
                    <Image
                      src={sampleImage}
                      width={100}
                      height={100}
                      className={styles.featureImage_style}
                    />
                  </div>
                  <div className={styles.project_title}>
                    <p>4 BHK 3976 Sq-ft Flat For Sale Sector 22, Gurgaon</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.projectDetail_footerContainer}>
        <div className={styles.dekstop_projectDetailFooter_Wrapper}>
          <DekstopFooter />
        </div>
        <div className={styles.mobile_projectDetailFooter_Wrapper}>
          <div className={styles.footer_iconBox}>
            <div className={styles.iconBox}>
              <IoIosArrowBack />
            </div>
            <p className={styles.footer_text}>Back</p>
          </div>
          <div className={styles.footer_iconBox}>
            <div className={styles.iconBox}>
              <IoIosCall />
            </div>
            <p className={styles.footer_text}>Whatsapp</p>
          </div>
          <div className={styles.footer_iconBox}>
            <div className={styles.iconBox}>
              <MdOutlineMessage />
            </div>
            <p className={styles.footer_text}>Enquey</p>
          </div>
          <div className={styles.footer_iconBox}>
            <div className={styles.iconBox}>
              <IoCallOutline />
            </div>
            <p className={styles.footer_text}>Call</p>
          </div>
        </div>
      </div>
    </div>
  );
}
