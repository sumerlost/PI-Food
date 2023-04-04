import React from "react";
import styles from "./InfoDetail.module.css"

export const InfoDetail = () => {

    return (
        <div className={styles.Workplace}>
            <div className={styles.Info}>
                <div className={styles.InfoName}>
                    <h2 className={styles.Name}>Sopita de lentejas</h2>
                </div>
                <div className={styles.Data1}>
                    <h3 className={styles.InfoData1}>asd</h3>
                    <h3 className={styles.InfoData1}>asd</h3>
                </div>
                <div className={styles.Data1}>
                    <h3 className={styles.InfoData2}> Gluten free, Vegetarian, putoelquelee</h3>
                </div>
            </div>
            <div className={styles.Steps}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h4>
            </div>
        </div>
    )
}