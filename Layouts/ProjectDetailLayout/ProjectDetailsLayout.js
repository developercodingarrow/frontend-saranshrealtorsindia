import React, { useContext, useEffect, useState } from "react";
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
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import PropertyInformationSection from "./PropertyInformationSection";
import CarosoleComponent from "./CarosoleComponent";
import whatsapp from "../../public/web-static-images/whatsapp-image.png";
import AmanitesSection from "./AmanitesSection";
import usePriceFormatter from "../../custome-hooks/usePriceFormatter";
import SideBar from "../../Utils/cards/sideBarCard/SideBar";

export default function ProjectDetailsLayout() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { project, setproject } = useContext(ListingContext);
  const { formatPrice } = usePriceFormatter();
  console.log(project);

  const [coverImages, setCoverImages] = useState([]);

  useEffect(() => {
    if (
      project &&
      project.ProjectCoverImage &&
      project.ProjectCoverImage.length > 0
    ) {
      const imageUrls = project.ProjectCoverImage.map((image) => ({
        src: `/project-images/${image.url}`,
        altText: image.altText,
      }));
      setCoverImages(imageUrls);
    } else {
      setCoverImages([]);
    }
  }, [project]);

  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />
      <div className={styles.detail_topContainer}>
        <div className={styles.project_titleBar}>
          <div className={styles.titleBox}>
            <p>{project.projectTitle}</p>
          </div>
          <div className={styles.priceBox}>
            <span>
              {project && project.price && formatPrice(project.price)}
            </span>
            <span>crore</span>
          </div>
        </div>
        <div className={styles.formImage_Container}>
          <div className={styles.carousel_container}>
            {coverImages && (
              <CarosoleComponent
                images={coverImages}
                CarouselStyle="CoverCarosole"
              />
            )}
          </div>
          <div className={styles.form_Container}>
            <div className={styles.enqureyForm_wrapper}>
              <EnquireForm />
            </div>
            <div className={styles.static_messageBox}>
              <div className={styles.or_sepratorBox}>
                <p>---------------------------OR----------------------------</p>
              </div>
              <div className={styles.stactic_contactBox}>
                <span>
                  {" "}
                  <IoIosCall />{" "}
                </span>
                <span>0124 2250004</span>
              </div>
              <div className={styles.stactic_contactBox}>
                <span>
                  {" "}
                  <Image src={whatsapp} width={20} height={20} />
                </span>
                <span>WhatsApp Message</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_Container}>
        <div className={styles.information_container}>
          <div>
            <PropertyInformationSection data={project} />
          </div>
          <div className={styles.project_detailsContainer}>
            <div className={styles.section_Heading}>
              <h3 className={"global_subHeading"}>Property Descreption</h3>
            </div>
            <div className={styles.project_descreptionWrapper}>
              <p
                className="global_contentStyle"
                dangerouslySetInnerHTML={{
                  __html: project.projectDescription || "",
                }}
              ></p>
            </div>
          </div>

          <div>
            <AmanitesSection />
          </div>

          <div className={styles.floorPlan_wrapper}>
            <div className={styles.wrapperBox}>
              <div className={styles.section_Heading}>
                <h3 className={"global_subHeading"}>Floor Plan</h3>
              </div>
              <div className={styles.clousol_wrapper}>
                {coverImages && (
                  <CarosoleComponent
                    images={coverImages}
                    CarouselStyle="floorPlanCarosole"
                  />
                )}
              </div>
            </div>
            <div className={styles.wrapperBox}>
              <div className={styles.section_Heading}>
                <h3 className={"global_subHeading"}>Lay Outs</h3>
              </div>
              <div className={styles.clousol_wrapper}>
                {coverImages && (
                  <CarosoleComponent
                    images={coverImages}
                    CarouselStyle="floorPlanCarosole"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.side_bar_container}>
          <SideBar title="Feature PRojects" />
          <SideBar title="UPCOMING PROJECT" />
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
