import React, { useContext, useState } from "react";
import styles from "./css/contactUsLayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import EnquireForm from "../../Utils/cards/EnquireForm";
import { contactFormFiled, dummyapi } from "../../JsonData/formFileds";
import { useCustomForm } from "../../custome-hooks/useCustomForm";
import SubmitBtn from "../../Utils/Elements/buttonsElements/SubmitBtn";
export default function ContactUsLayOut() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomForm(dummyapi);
  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />
      <div className={styles.contactUs_hero}>
        <div className={styles.inner_container}>Contact Us</div>
      </div>

      <div className={styles.column_container}>
        <div className={styles.form_Part}>
          <div className={styles.form_descreptionBox}>
            Thank you for your interest in Saranshrealtors Services. Please mail
            us your requirements and your business needs to help us serve you
            better. This information will enable us to route your request to the
            appropriate person. You should receive a response within 48 working
            hours.
          </div>
          <div className={styles.form_container}>
            {[1, 2, 3].map((el, i) => {
              return (
                <div className={styles.contact_infoBox}>
                  <div className={styles.imfo_headingBox}>
                    Our Branch Address Head Office
                  </div>
                  <div className={styles.info_detailBox}>
                    416, Tower 4, DLF Corporate Greens, Sector 74A, Gurgaon –
                    122004
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.sideBar_part}>
          <form>
            <div className={styles.form_inputWrapper}>
              {contactFormFiled.map((input) => renderInput(input))}
            </div>

            <div>
              <SubmitBtn
                text="submit"
                buttonstyle="fullWidthBtn"
                btnColor="primaryBtnColor"
                btnSze="fullWidthBtnSize"
                disabled={!isValid}
              />
            </div>
          </form>
        </div>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.dekstop_footer}>
          <DekstopFooter />
        </div>
        <div className={styles.mobile_footerWrapper}>
          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
