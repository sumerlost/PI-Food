import React from "react";
import img from "../../icons/recipes.png"
import styles from "./Button.module.css"
import { Link } from "react-router-dom";
import { RECIPES } from "../../Routes/Routes";

export default function Button() {
    return (
        <div className={styles.Center}>
            <Link to={RECIPES}><img className={styles.icon} src={img} alt="" /></Link>
        </div>
    )
}