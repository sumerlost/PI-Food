import React from "react";
import img from "../../icons/recipes.png"
import styles from "./Button.module.css"

export default function Button() {
    return (
        <div className={styles.Center}>
            <img className={styles.icon} src={img} alt="" />
        </div>
    )
}