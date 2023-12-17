import React from "react";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.layout}>
        <p className={styles.list}>
          <img
            className={styles.home}
            src={process.env.PUBLIC_URL + "/images/icon_home.svg"}
            alt=""
          />
          <span>MY BOX</span>
        </p>
      </div>
    </div>
  );
}

export default Navigation;
