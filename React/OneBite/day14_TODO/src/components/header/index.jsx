import React from "react";
import styles from "./header.module.css";

const WEEKS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Header = () => {
  const date = new Date();
  const currentDate = `${WEEKS[date.getDay()]} ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;

  return (
    <section>
      <h3 className={styles.headerSubTitle}>오늘은 📆</h3>
      <h1 className={styles.headerTitle}>{currentDate}</h1>
    </section>
  );
};

export default Header;
