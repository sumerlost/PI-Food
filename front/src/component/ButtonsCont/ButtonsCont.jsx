import React from "react";
import Button from "../Button/Button";
import styles from "./ButtonsCont.module.css"

export const ButtonsCont = () => {
    return (
        <div className={styles.Position}>
            <div className={styles.Size}><Button /></div>
            <div className={styles.Size}><Button /></div>
            <div className={styles.Size}><Button /></div>
        </div>
    )
}