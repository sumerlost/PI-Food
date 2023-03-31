import React from "react";
import styles from "./Confilascards.module.css"
import { Cards } from "./Cards";

export const Confilascards = () => {

    return (
        <div>
            <div className={styles.Size}><Cards position={0} /></div>
            <div className={styles.Size}><Cards position={3} /></div>
            <div className={styles.Size}><Cards position={6} /></div>
        </div>
    )
}