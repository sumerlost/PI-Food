import React from "react";
import Button from "../Button/Button";
import styles from "./Principal.module.css"
import { ButtonsCont } from "../ButtonsCont/ButtonsCont";
export default function Principal() {
    return (
        <div className={styles.Principal}>
            <div className={styles.Divcont}><ButtonsCont /></div>
            <div className={styles.Divcont}><ButtonsCont /></div>
        </div >
    )
}