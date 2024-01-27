import React from "react";
import Image from "next/image";
import styles from "./css/projectListingLayout.module.css";
import {
  FcHome,
  HiOutlineBuildingOffice2,
  IoCallOutline,
  MdOutlineMessage,
  IoNewspaperOutline,
  FaBars,
  IoMdFunnel,
} from "../../Utils/ApplicationIcon";
import logo from "../../public/web-static-images/saransh logo.png";
export default function ListingNavBar(props) {
  const { toggleAppDrawer, toggleSideBar } = props;
  return (
    <div className={styles.navBar_container}>
      <div className={styles.desktop_navBarContainer}>Dekstop NavBar</div>
      <div className={styles.mobile_navbarContainer}>
        <div onClick={toggleAppDrawer}>
          {" "}
          <FaBars />{" "}
        </div>
        <div>
          {" "}
          <Image src={logo} width={100} height={40} />{" "}
        </div>
        <div className={styles.fillter_iconBox}>
          {" "}
          <IoMdFunnel onClick={toggleSideBar} />
        </div>
      </div>
    </div>
  );
}
