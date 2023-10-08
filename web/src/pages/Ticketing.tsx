import React from "react";
import styles from "./Ticketing.module.scss";

const Ticketing = () => {
  return (
    <div className={styles.fullpage}>
      <div className={styles.page}>
        <div className={styles.ticketing_container}></div>
      </div>
    </div>
  );
};

export default Ticketing;
