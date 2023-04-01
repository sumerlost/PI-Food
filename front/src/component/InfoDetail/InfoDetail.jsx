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

        </div>
    )
}