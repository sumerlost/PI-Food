import React from "react";
import Button from "../Button/Button";
import styles from "./Principal.module.css"

export default function Principal() {
    return (
        <div className={styles.Principal}>
            <div className={styles.Divcont}>
                <div className={styles.Size}><Button /></div>
                <div className={styles.Size}><Button /></div>
                <div className={styles.Size}><Button /></div>
            </div>
            <div className={styles.Divcont}>
                <div className={styles.Size}><Button /></div>
                <div className={styles.Size}><Button /></div>
                <div className={styles.Size}><Button /></div>
            </div>
        </div >
    )
}
