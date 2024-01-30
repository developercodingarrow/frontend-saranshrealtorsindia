import React from "react";
import styles from "./css/dekstopNavbar.module.css";
import Image from "next/image";
import logo from "../../public/web-static-images/saransh logo.png";
import Link from "next/link";
const pagleTabs = [
  {
    name: "Home",
  },
  {
    name: "About us",
  },

  {
    name: "Project",
  },

  {
    name: "Blog",
  },

  {
    name: "Contat us",
  },
];

export default function DekstopNavbar() {
  return (
    <div className={styles.main_container}>
      <div className={styles.logoBox}>
        <Image
          src={logo}
          width={100}
          height={100}
          className={styles.logoStyle}
        />
      </div>

      <div className={styles.pageTab_container}>
        {pagleTabs.map((el) => {
          return (
            <div className={styles.pageTabBox}>
              <Link href={"/"} className={styles.pageTabLink}>
                {el.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
